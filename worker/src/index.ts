interface Env {
  QUIZ_KV: KVNamespace;
}

const CORS_HEADERS: HeadersInit = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const ID_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // No I/O/0/1 to avoid confusion
const ID_LENGTH = 6;
const MAX_BODY_SIZE = 512_000; // 500 KB

function generateId(): string {
  const bytes = new Uint8Array(ID_LENGTH);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => ID_CHARS[b % ID_CHARS.length]).join("");
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

function errorResponse(message: string, status: number): Response {
  return json({ error: message }, status);
}

function isValidQuiz(data: unknown): data is Record<string, unknown> {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.title === "string" &&
    d.title.length > 0 &&
    typeof d.description === "string" &&
    Array.isArray(d.results) &&
    d.results.length >= 2 &&
    Array.isArray(d.questions) &&
    d.questions.length >= 1
  );
}

async function handlePost(request: Request, env: Env): Promise<Response> {
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
    return errorResponse("Le quiz est trop volumineux (max 500 KB)", 413);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return errorResponse("JSON invalide", 400);
  }

  if (!isValidQuiz(body)) {
    return errorResponse(
      "Structure du quiz invalide (title, description, results[2+], questions[1+] requis)",
      400,
    );
  }

  // Generate unique ID (retry on collision, max 5 attempts)
  let id = "";
  for (let attempt = 0; attempt < 5; attempt++) {
    const candidate = generateId();
    const existing = await env.QUIZ_KV.get(candidate);
    if (!existing) {
      id = candidate;
      break;
    }
  }

  if (!id) {
    return errorResponse("Impossible de générer un ID unique", 500);
  }

  const quizData = { ...body, id };

  // Store in KV with no expiration (indefinitely)
  await env.QUIZ_KV.put(id, JSON.stringify(quizData));

  return json({ id }, 201);
}

async function handleGet(id: string, env: Env): Promise<Response> {
  if (!/^[A-Z2-9]{6}$/.test(id)) {
    return errorResponse("Format d'ID invalide", 400);
  }

  const data = await env.QUIZ_KV.get(id);
  if (!data) {
    return errorResponse("Quiz introuvable", 404);
  }

  return new Response(data, {
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { method } = request;

    // Handle CORS preflight
    if (method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // POST /quiz — create a quiz
    if (method === "POST" && url.pathname === "/quiz") {
      return handlePost(request, env);
    }

    // GET /quiz/:id — download a quiz
    const match = url.pathname.match(/^\/quiz\/([A-Z2-9]{6})$/);
    if (method === "GET" && match) {
      return handleGet(match[1], env);
    }

    return errorResponse("Route non trouvée", 404);
  },
} satisfies ExportedHandler<Env>;

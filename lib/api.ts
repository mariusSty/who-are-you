const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8787";

export async function uploadQuiz(
  quiz: Record<string, unknown>,
): Promise<{ id: string }> {
  const response = await fetch(`${API_BASE_URL}/quiz`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quiz),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(data?.error ?? `Erreur serveur (${response.status})`);
  }

  return response.json() as Promise<{ id: string }>;
}

export async function downloadQuiz(
  id: string,
): Promise<Record<string, unknown>> {
  const sanitizedId = id.toUpperCase().replace(/[^A-Z2-9]/g, "");
  if (sanitizedId.length !== 6) {
    throw new Error("Le code doit contenir exactement 6 caractères");
  }

  const response = await fetch(`${API_BASE_URL}/quiz/${sanitizedId}`);

  if (response.status === 404) {
    throw new Error("Aucun quiz trouvé avec ce code");
  }

  if (!response.ok) {
    throw new Error(`Erreur serveur (${response.status})`);
  }

  return response.json() as Promise<Record<string, unknown>>;
}

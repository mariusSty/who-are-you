export const pastelColors = ["#8E7AB5", "#B784B7", "#E493B3", "#EEA5A6"];

const tintColorLight = pastelColors[0];
const tintColorDark = pastelColors[3];

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

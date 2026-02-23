export type SparkLevel = "sleepy" | "normal" | "turbo";

const MOODS: Record<SparkLevel, string> = {
  sleepy: "low battery mode",
  normal: "steady focus",
  turbo: "shipping mode"
};

export function sparkStatus(name: string, level: SparkLevel): string {
  const cleanName = name.trim() || "anonymous dev";
  return `${cleanName}: ${MOODS[level]}`;
}

export function tinyWin(points: number): string {
  if (points <= 0) {
    return "no win yet";
  }

  if (points < 5) {
    return "small win";
  }

  return "big win";
}

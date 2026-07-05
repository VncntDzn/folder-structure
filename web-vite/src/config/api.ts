export const API_CONFIG = {
  baseUrl: "/api",
  timeoutMs: 10_000,
} as const;

export type ApiConfig = typeof API_CONFIG;

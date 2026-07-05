import { useMemo } from "react";

import { API_CONFIG } from "../../config/api";

export type ApiRequestConfig = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
};

export type ApiClient = {
  baseUrl: string;
  request: <T>(path: string, config?: ApiRequestConfig) => Promise<T>;
};

export function useAxios(): ApiClient {
  return useMemo(
    () => ({
      baseUrl: API_CONFIG.baseUrl,
      async request<T>(path: string, config?: ApiRequestConfig) {
        return Promise.resolve({ path, config } as T);
      },
    }),
    [],
  );
}

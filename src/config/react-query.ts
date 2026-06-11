export type QueryRetryValue = boolean | number;

export type QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: QueryRetryValue;
      staleTime: number;
      refetchOnWindowFocus: boolean;
    };
    mutations: {
      retry: QueryRetryValue;
    };
  };
};

export const reactQueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
};

export function createReactQueryConfig(
  overrides: Partial<QueryClientConfig> = {},
) {
  return {
    ...reactQueryConfig,
    ...overrides,
  };
}

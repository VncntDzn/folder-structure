import { useState } from "react";

import type { AuthResponse } from "../../../dtos/auth.response";
import type { SignInPayload } from "../dtos/signin.request";

export function useSignin() {
  const [isLoading, setIsLoading] = useState(false);

  const signin = async (payload: SignInPayload): Promise<AuthResponse> => {
    setIsLoading(true);

    try {
      return Promise.resolve({
        accessToken: "sample-access-token",
        refreshToken: "sample-refresh-token",
        user: {
          id: "user-1",
          email: payload.email,
          fullName: "Sample User",
          role: "member",
          createdAt: new Date().toISOString(),
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signin,
    isLoading,
  };
}

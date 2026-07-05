import { useState } from "react";

import type { AuthResponse } from "../../dtos/auth.response";
import type { SignUpPayload } from "../dtos/signup.request";

export function useSignup() {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (payload: SignUpPayload): Promise<AuthResponse> => {
    setIsLoading(true);

    try {
      return Promise.resolve({
        accessToken: "sample-access-token",
        refreshToken: "sample-refresh-token",
        user: {
          id: "user-1",
          email: payload.email,
          fullName: payload.fullName,
          role: "member",
          createdAt: new Date().toISOString(),
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signup,
    isLoading,
  };
}

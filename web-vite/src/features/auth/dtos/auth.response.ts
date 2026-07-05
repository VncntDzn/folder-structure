import type { User } from "../domain/user";

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

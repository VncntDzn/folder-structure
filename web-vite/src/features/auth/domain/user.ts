export type UserRole = "admin" | "member";

export type User = {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: string;
};

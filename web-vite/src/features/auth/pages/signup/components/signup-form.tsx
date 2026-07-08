import type { FormEvent } from "react";

import { Button, Input } from "../../../../../common/ui";
import type { SignUpPayload } from "../dtos/signup.request";

export type SignUpFormProps = {
  isLoading?: boolean;
  onSubmit?: (payload: SignUpPayload) => void | Promise<void>;
};

export function SignUpForm({
  isLoading = false,
  onSubmit,
}: SignUpFormProps) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit?.({
      fullName: "New User",
      email: "user@example.com",
      password: "password",
      confirmPassword: "password",
    });
  };

  return (
    <form onSubmit={(event) => void handleSubmit(event)}>
      <Input id="signup-name" label="Full name" name="fullName" />
      <Input id="signup-email" label="Email" name="email" type="email" />
      <Input
        id="signup-password"
        label="Password"
        name="password"
        type="password"
      />
      <Button isLoading={isLoading} type="submit">
        Sign Up
      </Button>
    </form>
  );
}

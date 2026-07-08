import type { FormEvent } from "react";

import { Button, Input } from "../../../../../common/ui";
import type { SignInPayload } from "../dtos/signin.request";

export type SignInFormProps = {
  isLoading?: boolean;
  onSubmit?: (payload: SignInPayload) => void | Promise<void>;
};

export function SignInForm({
  isLoading = false,
  onSubmit,
}: SignInFormProps) {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onSubmit?.({
      email: "user@example.com",
      password: "password",
    });
  };

  return (
    <form onSubmit={(event) => void handleSubmit(event)}>
      <Input id="signin-email" label="Email" name="email" type="email" />
      <Input
        id="signin-password"
        label="Password"
        name="password"
        type="password"
      />
      <Button isLoading={isLoading} type="submit">
        Sign In
      </Button>
    </form>
  );
}

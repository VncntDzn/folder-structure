import { Button, Input } from "../../../../common/components";
import { PublicLayout } from "../../../../common/layouts";
import { useSignup } from "../hooks/use-signup";

export function SignUpPage() {
  const { signup, isLoading } = useSignup();

  return (
    <PublicLayout title="Create Account">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void signup({
            fullName: "New User",
            email: "user@example.com",
            password: "password",
            confirmPassword: "password",
          });
        }}
      >
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
    </PublicLayout>
  );
}

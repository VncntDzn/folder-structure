import { Button, Input } from "../../../../common/components";
import { PublicLayout } from "../../../../common/layouts";
import { useSignin } from "../hooks/use-signin";

export function SignInPage() {
  const { signin, isLoading } = useSignin();

  return (
    <PublicLayout title="Sign In">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void signin({
            email: "user@example.com",
            password: "password",
          });
        }}
      >
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
    </PublicLayout>
  );
}

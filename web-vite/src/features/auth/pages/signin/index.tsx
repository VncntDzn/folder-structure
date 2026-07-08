import { PublicLayout } from "../../../../common/layouts";
import { SignInForm } from "./components/signin-form";
import { useSignin } from "./hooks/use-signin";

export function SignInPage() {
  const { signin, isLoading } = useSignin();

  return (
    <PublicLayout title="Sign In">
      <SignInForm
        isLoading={isLoading}
        onSubmit={async (payload) => {
          await signin(payload);
        }}
      />
    </PublicLayout>
  );
}

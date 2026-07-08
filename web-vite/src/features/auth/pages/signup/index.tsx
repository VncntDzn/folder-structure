import { PublicLayout } from "../../../../common/layouts";
import { SignUpForm } from "./components/signup-form";
import { useSignup } from "./hooks/use-signup";

export function SignUpPage() {
  const { signup, isLoading } = useSignup();

  return (
    <PublicLayout title="Create Account">
      <SignUpForm
        isLoading={isLoading}
        onSubmit={async (payload) => {
          await signup(payload);
        }}
      />
    </PublicLayout>
  );
}

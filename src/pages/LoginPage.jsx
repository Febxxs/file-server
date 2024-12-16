import AuthFormLayout from "../layouts/AuthLayout";
import FormLogin from "../components/auth/FormLogin";

const LoginPage = () => {
  return (
    <AuthFormLayout type="login">
      <FormLogin />
    </AuthFormLayout>
  );
};

export default LoginPage;

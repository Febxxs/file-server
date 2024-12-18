import FormLogin from "../components/auth/FormLogin";
import AuthLayout from "../layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;

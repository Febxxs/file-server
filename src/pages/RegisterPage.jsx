import FormRegister from "../components/auth/FormRegister";
import AuthLayout from "../layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;

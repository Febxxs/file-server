import FormRegister from "../components/auth/FormRegister";
import AuthFormLayout from "../layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthFormLayout type="register">
      <FormRegister />
    </AuthFormLayout>
  );
};

export default RegisterPage;

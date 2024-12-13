import { Button, Input } from "@nextui-org/react";
import AuthFormLayout from "../layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthFormLayout>
      <div className="flex justify-center items-center min-h-screen max-w-screen-lg w-full mx-auto">
        <div className="p-4  text-white">
          <h1 className="font-bold text-center text-3xl">Register</h1>
          <form className=" flex flex-col gap-4 w-80 p-4 ">
            <Input
              variant="underlined"
              label="Email"
              // placeholder="Enter your email"
              type="email"
              color="primary"
              className="text-white"
              size="lg"
            />
            <Input
              variant="underlined"
              color="primary"
              className="text-white"
              size="lg"
            />
            <Input
              variant="underlined"
              color="primary"
              className="text-white"
              size="lg"
            />

            <Button className="w-full" color="primary">
              Test
            </Button>
          </form>
        </div>
      </div>
    </AuthFormLayout>
  );
};

export default LoginPage;

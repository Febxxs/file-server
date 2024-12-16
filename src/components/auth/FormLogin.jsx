import { Button, Input } from "@nextui-org/react";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full">
      <form className="space-y-12">
        <Input
          type="email"
          variant="bordered"
          radius="none"
          labelPlacement="outside"
          label="Email"
          placeholder="Example@mail.com"
          className="font-extrabold"
        />
        <Input
          type={showPassword ? "text" : "password"}
          variant="bordered"
          radius="none"
          labelPlacement="outside"
          label="Password"
          placeholder="Password"
          className="font-extrabold"
          endContent={
            showPassword ? (
              <EyeClosed
                className="cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <Eye className="cursor-pointer" onClick={handleShowPassword} />
            )
          }
        />
        <Button
          type="submit"
          radius="none"
          fullWidth={true}
          color="primary"
          className="text-white font-bold"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;

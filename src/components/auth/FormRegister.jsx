import { Button, Input } from "@nextui-org/react";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    verification: false,
  });

  const handleShowPassword = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field], // Toggle value for the specified field
    }));
  };

  return (
    <div className="w-full">
      <form className="space-y-12">
        <Input
          type="text"
          variant="bordered"
          radius="none"
          labelPlacement="outside"
          label="Name"
          placeholder="Masukan Nama"
          className="font-extrabold"
        />
        <Input
          type="email"
          variant="bordered"
          radius="none"
          labelPlacement="outside"
          label="Email"
          placeholder="Example@mail.com"
          className="font-extrabold"
        />
        {/* Password Input */}
        <Input
          type={showPassword.password ? "text" : "password"}
          variant="bordered"
          radius="none"
          labelPlacement="outside"
          label="Password"
          placeholder="Password"
          className="font-extrabold"
          endContent={
            showPassword.password ? (
              <EyeClosed
                className="cursor-pointer"
                onClick={() => handleShowPassword("password")} // Use function to handle click
              />
            ) : (
              <Eye
                className="cursor-pointer"
                onClick={() => handleShowPassword("password")} // Use function to handle click
              />
            )
          }
        />
        {/* Verify Password Input */}
        <Input
          type={showPassword.verification ? "text" : "password"}
          variant="bordered"
          radius="none"
          labelPlacement="outside"
          label="Verify Password"
          placeholder="Confirm Password"
          className="font-extrabold"
          endContent={
            showPassword.verification ? (
              <EyeClosed
                className="cursor-pointer"
                onClick={() => handleShowPassword("verification")} // Use function to handle click
              />
            ) : (
              <Eye
                className="cursor-pointer"
                onClick={() => handleShowPassword("verification")} // Use function to handle click
              />
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
          Register
        </Button>
      </form>
    </div>
  );
};

export default FormRegister;

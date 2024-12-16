import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthFormLayout = ({ children, type }) => {
  return (
    <main className="container mx-auto max-w-sm">
      <div className="flex justify-center items-center min-h-screen flex-col gap-5">
        <h1 className="font-extrabold text-2xl text-left  mb-4">
          {type === "login" ? "Masuk dengan akun" : "Daftarkan akun"}
        </h1>
        {/* form */}
        {children}

        {type === "login" ? (
          <p>
            Belum punya akun?{" "}
            <Link className="text-primary" to="/register">
              Daftar sekarang
            </Link>
          </p>
        ) : (
          <p>
            Sudah punya akun?{" "}
            <Link className="text-primary" to="/login">
              Masuk sekarang
            </Link>
          </p>
        )}
        <div className="text-[12px] text-center space-y-2">
          <p>
            Dengan melakukan pendaftaran, Anda setuju dengan syarat & ketentuan
            kami yang berlaku.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AuthFormLayout;

import HomePage from "../pages/HomePages";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  { path: "/", element: HomePage },
  { path: "/login", element: LoginPage },
  { path: "/register", element: RegisterPage },
  { path: "/", element: "" },
];
export default routes;

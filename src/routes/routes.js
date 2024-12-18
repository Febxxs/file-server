import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePages";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  {
    path: "/",
    element: HomePage,
    logged: false,
  },
  {
    path: "/login",
    element: LoginPage,
    logged: false,
  },
  {
    path: "/register",
    element: RegisterPage,
    logged: false,
  },
  {
    path: "/dashboard",
    element: Dashboard,
    logged: true,
  },
  {
    path: "/profile",
    element: ProfilePage,
    logged: true,
  },
];
export default routes;

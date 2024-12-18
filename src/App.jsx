import DashboardLayout from "./layouts/DashboardLayout";
import MainLayoutNotLogged from "./layouts/MainLayoutNotLogged";
import routes from "./routes/routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={
                route.logged ? <DashboardLayout /> : <MainLayoutNotLogged />
              }
            >
              <Route path={route.path} element={<route.element />} />
            </Route>
          );
        })}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

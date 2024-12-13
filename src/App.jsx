import routes from "./routes/routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

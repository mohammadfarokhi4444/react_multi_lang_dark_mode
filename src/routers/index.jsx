import { Navigate, useRoutes } from "react-router-dom";
import RouterGuard from "./RouterGuard";
import { useUserState } from "../context/UserContext";
import Dashboard from "../pages/dashboard";
import Weather from "../pages/weather";
import TodoList from "../pages/todoList";
import Profile from "../pages/profile";
import NotFound from "../pages/404";
import Login from "../pages/login";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    { path: "/", element: <Navigate replace to={`/app/dashboard`} /> },
    {
      path: "/app",
      element: <Navigate replace to={`/app/dashboard`} />,
    },
    {
      path: "/app",
      element: <RouterGuard />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "weather",
          element: <Weather />,
        },
        {
          path: "todo-list",
          element: <TodoList />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
    { path: "login", element: <Login /> },
  ]);

  return routes;
}

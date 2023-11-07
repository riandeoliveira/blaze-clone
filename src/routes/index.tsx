import { Games } from "features/games/pages";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/games/crash" />,
  },
  {
    path: "/games/crash",
    element: <AppRoute page={Games.Crash} />,
  },
]);

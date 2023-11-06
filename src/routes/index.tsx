import { Games } from "features/games/pages";
import { createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";

export const router = createBrowserRouter([
  {
    path: "/games/crash",
    element: <AppRoute page={Games.Crash} />,
  },
]);

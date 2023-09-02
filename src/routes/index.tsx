import { Games } from "pages/games";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/games/crash",
    element: <Games.Crash />,
  },
]);

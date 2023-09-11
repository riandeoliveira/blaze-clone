import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";

export const App = observer((): ReactElement => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
});

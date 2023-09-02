import type { ReactNode } from "react";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  useEffect(() => {}, []);

  return <>{children}</>;
};

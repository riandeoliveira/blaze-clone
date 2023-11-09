import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

interface AppRouteProps {
  page: () => ReactElement;
}

export const AppRoute = observer(({ page: Page }: AppRouteProps): ReactElement => {
  return <Page />;
});

import type { FunctionComponent, SVGProps } from "react";
import { ReactComponent as BlazeDesktopLogo } from "./blaze-desktop-logo.svg";
import { ReactComponent as BlazeMobileLogo } from "./blaze-mobile-logo.svg";
import { ReactComponent as Brl } from "./brl.svg";
import { ReactComponent as Casino } from "./casino.svg";
import { ReactComponent as Check } from "./check.svg";
import { ReactComponent as CrashRocket } from "./crash-rocket.svg";
import { ReactComponent as Sports } from "./sports.svg";

export type IconType = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export const Icon = {
  BlazeDesktopLogo,
  BlazeMobileLogo,
  Brl,
  Casino,
  Check,
  CrashRocket,
  Sports,
};

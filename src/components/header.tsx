import type { IconType } from "@/assets/icons";
import { Icon } from "@/assets/icons";
import { useDependencies } from "@/contexts/dependencies-context";
import type { ParentComponentProps } from "@/types/components";
import { cn } from "@/utils/cn";
import { toBRL } from "@/utils/currency";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import { Button } from "./button";

interface HeaderRootProps extends ParentComponentProps {}

const HeaderRoot = observer(({ children }: HeaderRootProps): ReactElement => {
  const { walletBalanceStore } = useDependencies();

  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery: MediaQueryList = matchMedia("(max-width: 600px)");

    const handleResize = (): void => setIsMobileScreen(mediaQuery.matches);

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="flex flex-col">
      <div className="items-center flex h-[72px] pl-4 absolute">
        <a href="#">{isMobileScreen ? <Icon.BlazeMobileLogo /> : <Icon.BlazeDesktopLogo />}</a>
      </div>
      <div className="border-b border-solid border-c-separator flex h-[72px] justify-center px-[140px] s-1200px:pr-4 s-1200px:pl-[140px] s-600px:pr-4 s-600px:pl-16">
        <div className="flex justify-between max-w-[1072px] w-full">
          {children}
          <div className="items-center flex gap-6 s-600px:gap-3">
            <div className="items-center border border-solid border-c-separator rounded text-white flex font-medium gap-1 h-10 px-4 s-600px:px-2 tracking-[0.0625em]">
              <span className="text-sm">{toBRL(walletBalanceStore.amount)}</span>
              <Icon.Brl className="w-4" />
            </div>
            <Button.Primary className="s-600px:w-[82px]">Depositar</Button.Primary>
          </div>
        </div>
      </div>
    </header>
  );
});

interface HeaderTabProps extends ParentComponentProps {
  href: string;
  icon: IconType;
  isSelected?: boolean;
}

const HeaderTab = ({
  href,
  isSelected = false,
  icon: Icon,
  children,
}: HeaderTabProps): ReactElement => {
  return (
    <li className="h-full group">
      <a
        href={href}
        className={cn(
          "items-center border-b-2 border-solid cursor-pointer flex gap-1 h-full px-4 transition-all duration-500 group-hover:border-c-red s-600px:p-0",
          isSelected ? "border-c-red" : "border-transparent",
        )}
      >
        <Icon className="[&:hover>g>path]:fill-white" />
        <span
          className={cn(
            "text-white text-[11px] font-semibold tracking-[0.03125em] uppercase transition-colors duration-500 font-sofia-pro group-hover:text-white s-600px:hidden",
            isSelected ? "text-white" : "text-c-light-grey",
          )}
        >
          {children}
        </span>
      </a>
    </li>
  );
};

interface HeaderTabsProps extends ParentComponentProps {}

const HeaderTabs = ({ children }: HeaderTabsProps): ReactElement => {
  return (
    <nav>
      <ul className="flex items-center gap-3 h-full">{children}</ul>
    </nav>
  );
};

export const Header = {
  Root: HeaderRoot,
  Tab: HeaderTab,
  Tabs: HeaderTabs,
};

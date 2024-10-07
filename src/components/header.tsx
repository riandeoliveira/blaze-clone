import { Icon } from "@/assets/icons";
import { Navbar } from "@/components/navbar";
import { localStorageStore } from "@/stores/local-storage.store";
import { toBRL } from "@/utils/currency";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import { Button } from "./button";

export const Header = observer((): ReactElement => {
  const [windowWidth, setWindowWidth] = useState<number>(innerWidth);

  useEffect(() => {
    const handleResize = (): void => setWindowWidth(innerWidth);

    addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  const handleDeposit = (): void => localStorageStore.addToWalletBalance(10);

  return (
    <header className="flex flex-col">
      <div className="items-center flex h-[72px] pl-4 absolute">
        <a href="#">{windowWidth <= 768 ? <Icon.BlazeMobileLogo /> : <Icon.BlazeDesktopLogo />}</a>
      </div>
      <div className="border-b border-solid border-c-separator flex h-[72px] justify-center px-[140px] s-1200px:pr-4 s-1200px:pl-[140px] s-600px:pr-4 s-600px:pl-16">
        <div className="flex justify-between max-w-[1072px] w-full">
          <Navbar />
          <div className="items-center flex gap-6 s-600px:gap-3">
            <div className="items-center border border-solid border-c-separator rounded text-white flex font-medium gap-1 h-10 px-4 s-600px:px-2 tracking-[0.0625em]">
              <span className="text-sm">{toBRL(localStorageStore.walletBalance)}</span>
              <Icon.Brl className="w-4" />
            </div>
            <Button.Primary onClick={handleDeposit} className="s-600px:w-[82px]">
              Depositar
            </Button.Primary>
          </div>
        </div>
      </div>
    </header>
  );
});

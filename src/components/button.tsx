import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonPrimary = ({ children, className, ...props }: ButtonPrimaryProps): ReactElement => {
  return (
    <button
      type="button"
      className={cn(
        "bg-c-red rounded text-white cursor-pointer font-sofia-pro text-sm font-semibold h-10 tracking-wide transition-colors duration-500 w-[98px] disabled:cursor-no-drop disabled:opacity-30 active:translate-y-[1px] hover:bg-c-dark-red",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonSecondary = ({ children, className, ...props }: ButtonSecondaryProps): ReactElement => {
  return (
    <button
      type="button"
      className={cn(
        "bg-transparent border border-solid border-c-separator rounded text-c-cloudy-blue cursor-pointer flex-[0.45] font-sofia-pro font-semibold transition-colors duration-500 hover:bg-c-background hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const Button = {
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary,
};

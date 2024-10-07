import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, ReactElement } from "react";

type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonPrimary = ({
  children,
  className,
  ...props
}: ButtonPrimaryProps): ReactElement => {
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

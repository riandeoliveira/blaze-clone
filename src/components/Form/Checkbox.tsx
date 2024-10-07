import { Icon } from "@/assets/icons";
import type { MouseEventHandler } from "react";
import { type ReactElement } from "react";

type CheckboxProps = {
  checked: boolean;
  label: string;
  onCheck: MouseEventHandler<HTMLElement>;
};

export const Checkbox = ({ checked, label, onCheck }: CheckboxProps): ReactElement => {
  return (
    <div onClick={onCheck} className="items-center cursor-pointer flex gap-4">
      <button
        type="button"
        className="items-center bg-c-grey-2 border border-solid border-c-separator rounded-sm cursor-pointer flex h-4 justify-center w-4"
      >
        {checked && <Icon.Check />}
      </button>
      <label htmlFor={label} className="text-white cursor-pointer text-xs font-sofia-pro">
        {label}
      </label>
    </div>
  );
};

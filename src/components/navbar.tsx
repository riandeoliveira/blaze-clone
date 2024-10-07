import { Icon } from "@/assets/icons";
import type { ReactElement } from "react";

export const Navbar = (): ReactElement => {
  return (
    <nav>
      <ul className="flex items-center gap-3 h-full">
        <li className="h-full group">
          <a
            href="#"
            className="items-center border-b-2 border-solid border-c-red cursor-pointer flex gap-1 h-full px-4 transition-all duration-500 group-hover:border-c-red s-600px:p-0"
          >
            <Icon.Casino className="[&:hover>g>path]:fill-white" />
            <span className="text-c-light-grey text-[11px] font-semibold tracking-tight uppercase transition-colors duration-500 font-sofia-pro group-hover:text-white s-600px:hidden">
              Cassino
            </span>
          </a>
        </li>
        <li className="h-full group">
          <a
            href="#"
            className="items-center border-b-2 border-solid border-transparent cursor-pointer flex gap-1 h-full px-4 transition-all duration-500 group-hover:border-c-red s-600px:p-0"
          >
            <Icon.Sports className="[&:hover>g>path]:fill-white" />
            <span className="text-c-light-grey text-[11px] font-semibold tracking-tight uppercase transition-colors duration-500 font-sofia-pro group-hover:text-white s-600px:hidden">
              Esportes
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

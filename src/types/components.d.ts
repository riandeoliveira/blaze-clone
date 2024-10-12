import type { ReactNode } from "react";

export interface ParentComponentProps<T = ReactNode> {
  children: T;
}

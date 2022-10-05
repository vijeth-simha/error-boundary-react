import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
  setState?:any
}

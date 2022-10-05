import { ReactNode,ReactElement } from "react";

export interface Props {
  children?: ReactNode;
  options?: OptionProps
}

export interface State {
  hasError: boolean;
  setState?:any
}

export interface OptionProps {
  className?:string;
  component?: ReactElement;
  errorComponentType?: string;
}
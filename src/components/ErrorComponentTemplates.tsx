import { ReactElement } from "react";
import DefaultErrorTemplate from "../templates/DefaultErrorTemplate";
import { Props } from "../types";


const ErrorComponentTemplates: React.FunctionComponent<Props> = ({
  options,
}: Props) => {
  const component: ReactElement | undefined = options?.component;
  if (component) {
    return component;
  } else {
    return <DefaultTemplates options={options} />;
  }
};


const DefaultTemplates = ({options}:Props)=>{
    switch (options?.errorComponentType) {
        case "template-one":
            return null
        default:
            return <DefaultErrorTemplate />;
    }
}
export default ErrorComponentTemplates;

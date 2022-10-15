import { ReactElement } from "react";
import { DefaultErrorTemplate, TemplateOne, TemplateTwo } from "../templates";
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

const DefaultTemplates = ({ options }: Props) => {
  switch (options?.errorComponentType) {
    case "template-one":
      return <TemplateOne />;
    case "template-two":
      return <TemplateTwo />;
    default:
      return <DefaultErrorTemplate />;
  }
};
export default ErrorComponentTemplates;

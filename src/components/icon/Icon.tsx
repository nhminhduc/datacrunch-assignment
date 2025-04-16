import { FC } from "react";

import { IconNameType, innerSVG } from "./utils";

export interface IconProps {
  name: IconNameType;
  colorClassName?: string;
}

const Icon: FC<IconProps> = (props) => {
  const { name, colorClassName = "fill-current" } = props;
  return <>{innerSVG(name, colorClassName)}</>;
};

export default Icon;

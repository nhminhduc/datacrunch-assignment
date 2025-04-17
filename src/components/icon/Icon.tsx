import { FC } from "react";

import { IconNameType, innerSVG } from "./utils";

export interface IconProps {
  name: IconNameType;
  colorClassName?: string;
  size?: number;
}

const Icon: FC<IconProps> = (props) => {
  const { name, colorClassName = "fill-current", size = 16 } = props;
  return <>{innerSVG(name, colorClassName, size)}</>;
};

export default Icon;

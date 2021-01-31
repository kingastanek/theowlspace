import React from 'react';
import { colorWhite } from 'styles/GlobalStyles';
import icons from 'icons/icons';

interface iIcon {
  icon: string;
  fill?: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<iIcon> = ({
  icon,
  fill = colorWhite,
  width = '1.5rem',
  height = '1.5rem',
}): JSX.Element | null => {
  const IconComponent = icons[icon];
  return IconComponent ? (
    <IconComponent width={width} height={height} fill={fill} />
  ) : null;
};

export default Icon;

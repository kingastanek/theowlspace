import React from 'react';
import icons from 'icons/icons';

export type tIcon = {
  icon: string;
  fill?: string;
  width?: string;
  height?: string;
};

const Icon: React.FC<tIcon> = ({
  icon,
  fill,
  width = '1.5rem',
  height = '1.5rem',
}): JSX.Element | null => {
  const IconComponent = icons[icon];
  return IconComponent ? (
    <IconComponent width={width} height={height} fill={fill} />
  ) : null;
};

export default Icon;

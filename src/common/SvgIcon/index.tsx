import React from 'react';

interface SvgIconProps {
  src?: string,
  width?: string,
  height?: string,
  className?: string
}

const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
  <img className={className} src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);

export default SvgIcon;

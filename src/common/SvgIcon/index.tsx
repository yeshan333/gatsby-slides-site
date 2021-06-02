import React from 'react';

const SvgIcon = ({ src, width, height }) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);

export default SvgIcon;

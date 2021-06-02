import React from 'react';
import * as S from "./styles";

const Button = ({ color, width, children, onClick }: any) => (
  <S.Button color={color} width={width} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;

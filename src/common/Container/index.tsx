import React from 'react';
import * as S from "./styles";

interface ContainerProps {
  padding?: string,
  border?: string,
  children?: any
}

const Container = ({ padding, border, children }: ContainerProps) => (
  <S.Container padding={padding} border={border}>
    {children}
  </S.Container>
);

export default Container;

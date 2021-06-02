import React from 'react';
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const Input = ({ id, name, placeholder, onChange, t, type, value }) => (
  <S.Container>
    <label htmlFor={name}>{t(id)}</label>
    <S.Input
      // spellcheck="false"
      type={type}
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
    />
  </S.Container>
);

export default withTranslation()(Input);

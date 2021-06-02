import React from 'react';
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

import * as S from "./styles";

const Block = ({ title, content, t }) => {
  return (
    <S.Container>
      <Fade direction="left">
        <h6>{t(title)}</h6>
        <S.TextWrapper>
          <S.Content>{t(content)}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default withTranslation()(Block);

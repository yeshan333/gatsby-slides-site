/*
 * @Author: yeshan333
 * @Date: 2021-04-30 21:24:21
 * @GitHub: https://github.com/yeshan333
 * @Contact: yeshan1329441308@gmail.com
 * @License:
 * @LastEditTime: 2021-06-03 02:01:25
 * @Description:
 * @Links:
 */

import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Loadable from "@loadable/component";
import { Fade } from "react-awesome-reveal";

import * as S from "./styles";

const Button = Loadable(() => import("../../common/Button"));

const About = ({ title, subtitle, content, button, t }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.MiddleBlock>
      <Row justify="center" align="middle">
        <Fade direction="up">
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6 id="about">{title}</h6>
              <strong>{subtitle}</strong>
              <S.Content>{t(content)}</S.Content>
              {button ? (
                <Button
                  name="submit"
                  type="submit"
                  onClick={() => scrollTo("mission")}
                >
                  {t(button)}
                </Button>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(About);

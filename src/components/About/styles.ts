/*
 * @Author: yeshan333
 * @Date: 2021-04-30 21:24:56
 * @GitHub: https://github.com/yeshan333
 * @Contact: yeshan1329441308@gmail.com
 * @License:
 * @LastEditTime: 2021-04-30 22:38:03
 * @Description:
 * @Links:
 */
import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 700px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Illustration = styled.Image`
  width: 100%;
  height: ${RFValue(360)}px;
`;

export const Content = styled.View`
  padding: 0 50px;
  margin-top: -${RFValue(40)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 16px;

    font-family: ${theme.fonts.title700}
    font-size: ${RFValue(40)}px;
    text-align: center;
    line-height: ${RFValue(40)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 64px;

    font-family: ${theme.fonts.title500};
    font-size: ${RFValue(15)}px;
    text-align: center;
    line-height: ${RFValue(25)}px;
    color: ${theme.colors.heading};
  `}
`;

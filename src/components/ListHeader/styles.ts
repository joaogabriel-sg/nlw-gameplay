import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 27px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.highlight};
  `}
`;

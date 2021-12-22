import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View``;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  ${({ theme }) => css`
    margin-right: 6px;

    font-family: ${theme.fonts.title500};
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.heading};
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.highlight};
  `}
`;

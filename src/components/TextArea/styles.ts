import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TextInput`
  ${({ theme }) => css`
    background: ${theme.colors.secondary40};
    width: 100%;
    border-radius: 8px;
    margin-right: 4px;

    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    text-align: center;
    color: ${theme.colors.heading};
  `}
`;

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TextInput`
  ${({ theme }) => css`
    background: ${theme.colors.secondary40};
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 8px;
    border-width: ${RFValue(1)}px;
    border-color: ${theme.colors.secondary50};
    margin-right: 4px;

    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    text-align: center;
    color: ${theme.colors.heading};
  `}
`;

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Wrapper = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 11px;

    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Type = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 24px;

    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.highlight};
  `}
`;

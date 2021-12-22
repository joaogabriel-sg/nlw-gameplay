import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)``;

export const Gradient = styled(LinearGradient)`
  width: ${RFValue(104)}px;
  height: ${RFValue(120)}px;
  border-radius: 8px;
  margin-right: 8px;

  align-items: center;
  justify-content: center;
`;

type Props = {
  isChecked: boolean;
};

export const Content = styled.View<Props>`
  background: ${({ theme }) => theme.colors.secondary40};
  width: ${RFValue(100)}px;
  height: ${RFValue(116)}px;
  padding: 7px 0;
  border-radius: 8px;

  align-items: center;
  justify-content: space-between;

  opacity: ${({ isChecked }) => (isChecked ? 1 : 0.4)};
`;

export const CheckStatus = styled.View<Props>`
  ${({ theme, isChecked }) => css`
    background: ${theme.colors.secondary100};
    width: ${RFValue(12)}px;
    height: ${RFValue(12)}px;

    margin-right: 7px;
    border-radius: 3.5px;
    border-color: ${theme.colors.secondary50};
    border-width: ${RFValue(2)}px;

    align-self: flex-end;

    ${isChecked &&
    css`
      background: ${theme.colors.primary};
      width: ${RFValue(10)}px;
      height: ${RFValue(10)}px;
      border: none;
    `}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.heading};
  `}
`;

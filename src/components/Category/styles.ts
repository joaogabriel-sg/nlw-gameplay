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

export const InternGradient = styled(LinearGradient)<Props>`
  width: ${RFValue(100)}px;
  height: ${RFValue(116)}px;
  padding: 20px 0;
  border-radius: 8px;

  align-items: center;
  justify-content: space-between;

  opacity: ${({ isChecked }) => (isChecked ? 1 : 0.5)};
`;

export const CheckStatus = styled.View<Props>`
  ${({ theme, isChecked }) => css`
    background: ${theme.colors.secondary100};
    width: ${RFValue(12)}px;
    height: ${RFValue(12)}px;

    border-radius: ${RFValue(4)}px;
    border-color: ${theme.colors.secondary50};
    border-width: ${RFValue(2)}px;

    position: absolute;
    top: 7px;
    right: 7px;

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
    margin-top: 19px;

    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.heading};
  `}
`;

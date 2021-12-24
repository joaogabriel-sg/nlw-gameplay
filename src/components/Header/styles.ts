import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: ${RFValue(104)}px;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 24px;
  padding-right: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;

    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(20)}px;
    text-align: center;
    color: ${theme.colors.heading};
  `}
`;

export const ActionWrapper = styled.View``;

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(8)}px;
  overflow: hidden;

  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-right-width: ${RFValue(1)}px;
  border-right-color: ${({ theme }) => theme.colors.line};

  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: ${RFValue(24)}px;
  height: ${RFValue(18)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;

    font-family: ${theme.fonts.text500};
    font-size: ${RFValue(15)}px;
    text-align: center;
    color: ${theme.colors.heading};
  `}
`;

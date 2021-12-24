import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View``;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

type BulletStatusProps = {
  isOnline: boolean;
};

export const BulletStatus = styled.View<BulletStatusProps>`
  background: ${({ theme, isOnline }) =>
    isOnline ? theme.colors.on : theme.colors.primary};
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;
  margin-right: 9px;
`;

export const StatusName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.highlight};
  `}
`;

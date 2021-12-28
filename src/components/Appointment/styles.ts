import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(RectButton)``;

export const Wrapper = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const GuildIconWrapper = styled(LinearGradient)`
  width: ${RFValue(64)}px;
  height: ${RFValue(68)}px;
  border-radius: 8px;
  margin-right: 20px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 12px;

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

export const Category = styled.Text`
  ${({ theme }) => css`
    margin-right: 24px;

    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.highlight};
  `}
`;

export const Footer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    margin-left: 7px;

    font-family: ${theme.fonts.text500};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.heading};
  `}
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

type PlayerProps = {
  color: string;
};

export const Player = styled.Text<PlayerProps>`
  ${({ theme, color }) => css`
    margin-left: 7px;
    margin-right: 24px;

    font-family: ${theme.fonts.text500};
    font-size: ${RFValue(13)}px;
    color: ${color};
  `}
`;

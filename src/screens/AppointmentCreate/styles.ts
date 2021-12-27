import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`;

export const ServerSelectButton = styled(RectButton)``;

export const Select = styled.View`
  width: 100%;
  height: 68px;
  overflow: hidden;

  padding-right: 25px;
  border-radius: 8px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.secondary50};

  flex-direction: row;
  align-items: center;
`;

export const Image = styled.View`
  background: ${({ theme }) => theme.colors.secondary50};
  width: 64px;
  height: 68px;
  border-radius: 8px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.secondary50};
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  margin-top: 30px;

  flex-direction: row;
  justify-content: space-between;
`;

export const FieldContent = styled.View``;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  ${({ theme }) => css`
    margin-right: 4px;

    font-family: ${theme.fonts.text500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.highlight};
  `}
`;

export const CharactersLimit = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.highlight};
  `}
`;

export const Footer = styled.View`
  margin: 20px 0 56px;
`;

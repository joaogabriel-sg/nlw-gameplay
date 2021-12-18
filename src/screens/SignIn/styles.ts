import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Illustration = styled.Image`
  width: 100%;
  height: ${RFValue(360)}px;
`;

export const Content = styled.View`
  padding: 0 50px;
  margin-top: -${RFValue(40)}px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  font-size: ${RFValue(40)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Subtitle = styled.Text`
  margin-bottom: 64px;
  font-size: ${RFValue(15)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
`;

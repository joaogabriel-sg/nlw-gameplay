import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.secondary40};
  width: 78%;
  height: ${RFValue(1)}px;
  margin-top: ${RFValue(2)}px;
  margin-bottom: 31px;
  align-self: flex-end;
`;

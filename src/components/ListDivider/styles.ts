import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.secondary40};
  width: 80%;
  height: ${RFValue(1)}px;
  margin: 21px 0;
  align-self: flex-end;
`;

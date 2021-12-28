import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Overlay = styled.View`
  background: ${({ theme }) => theme.colors.overlay};
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const Bar = styled.View`
  background: ${({ theme }) => theme.colors.secondary30};
  width: 39px;
  height: ${RFValue(2)}px;

  border-radius: 2px;
  margin: 13px 0 103px;

  align-self: center;
`;

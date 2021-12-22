import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(LinearGradient)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 8px;
  margin-right: 22px;

  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(46)}px;
  height: ${RFValue(46)}px;
  border-radius: 8px;
`;

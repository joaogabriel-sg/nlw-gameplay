import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  min-height: ${RFValue(120)}px;
  max-height: ${RFValue(120)}px;
  padding-left: 24px;
`;

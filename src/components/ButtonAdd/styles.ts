import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.colors.primary};
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const PlusIcon = styled(MaterialCommunityIcons).attrs({ name: "plus" })`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.heading};
`;

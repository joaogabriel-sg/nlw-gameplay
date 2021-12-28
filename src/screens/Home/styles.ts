import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { AppointmentProps } from "../../components";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MatchesList = styled(
  FlatList as new (
    props: FlatListProps<AppointmentProps>
  ) => FlatList<AppointmentProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 69,
  },
})`
  margin-top: 24px;
  margin-left: 24px;
`;

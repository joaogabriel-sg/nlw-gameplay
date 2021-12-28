import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

import { GuildProps } from "../../components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 24px;
`;

export const GuildList = styled(
  FlatList as new (props: FlatListProps<GuildProps>) => FlatList<GuildProps>
)`
  width: 100%;
`;

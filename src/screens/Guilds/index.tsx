import React from "react";

import { Guild, GuildProps, ListDivider } from "../../components";

import * as S from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    { id: "1", name: "Lendários", icon: "image.png", owner: true },
    { id: "2", name: "Combatentes", icon: null, owner: false },
  ];

  return (
    <S.Container>
      <S.GuildList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </S.Container>
  );
}

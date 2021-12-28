import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import { GuildIcon } from "../GuildIcon";

import * as S from "./styles";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <S.Container activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <S.Content>
        <S.Wrapper>
          <S.Title>{data.name}</S.Title>

          <S.Type>{data.owner ? "Administrador" : "Convidado"}</S.Type>
        </S.Wrapper>
      </S.Content>

      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </S.Container>
  );
}

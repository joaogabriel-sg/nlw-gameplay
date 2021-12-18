import React from "react";
import { TouchableOpacityProps } from "react-native";

import DiscordImg from "../../shared/assets/discord.png";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.IconWrapper>
        <S.Icon source={DiscordImg} />
      </S.IconWrapper>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

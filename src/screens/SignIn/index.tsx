import React from "react";

import { ButtonIcon } from "../../components";

import IllustrationImg from "../../shared/assets/illustration.png";

import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <S.Illustration source={IllustrationImg} resizeMode="stretch" />

      <S.Content>
        <S.Title>
          Conecte-se{"\n"}e organize suas{"\n"}jogatinas
        </S.Title>

        <S.Subtitle>
          Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
        </S.Subtitle>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </S.Content>
    </S.Container>
  );
}

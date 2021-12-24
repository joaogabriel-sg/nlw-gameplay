import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import BannerImg from "../../shared/assets/banner.png";

import {
  Background,
  ButtonIcon,
  Header,
  ListDivider,
  ListHeader,
  Member,
} from "../../components";

import * as S from "./styles";

export function AppointmentDetails() {
  const theme = useTheme();

  const members = [
    {
      id: "1",
      username: "João Gabriel",
      avatar_url: "https://github.com/joaogabriel-sg.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Diego",
      avatar_url: "https://github.com/diego3g.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <S.Container>
        <Header
          title="Detalhes"
          action={
            <S.ShareButton>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </S.ShareButton>
          }
        />

        <S.BackgroundImage source={BannerImg}>
          <S.BannerContent>
            <S.Title>Lendários</S.Title>
            <S.Description>
              É hoje que vamos chegar ao challenger sem perder uma partida da
              md10
            </S.Description>
          </S.BannerContent>
        </S.BackgroundImage>

        <ListHeader title="Jogadores" subtitle="Total 3" />

        <S.Members
          data={members}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Member data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
        />

        <S.Footer>
          <ButtonIcon title="Entrar na partida" />
        </S.Footer>
      </S.Container>
    </Background>
  );
}

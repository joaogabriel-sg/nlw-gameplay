import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import { GuildIcon } from "../GuildIcon";

import PlayerSvg from "../../shared/assets/player.svg";
import CalendarSvg from "../../shared/assets/calendar.svg";

import { categories } from "../../shared/utils";

import * as S from "./styles";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const theme = useTheme();
  const { primary, on } = theme.colors;

  const [category] = categories.filter(
    (category) => category.id === data.category
  );

  const { owner } = data.guild;

  return (
    <S.Container {...rest}>
      <S.Wrapper>
        <GuildIcon />

        <S.Content>
          <S.Header>
            <S.Title>{data.guild.name}</S.Title>
            <S.Category>{category.title}</S.Category>
          </S.Header>

          <S.Footer>
            <S.DateInfo>
              <CalendarSvg />

              <S.Date>{data.date}</S.Date>
            </S.DateInfo>

            <S.PlayersInfo>
              <PlayerSvg fill={owner ? primary : on} />

              <S.Player color={owner ? primary : on}>
                {owner ? "Anfitrião" : "Visitante"}
              </S.Player>
            </S.PlayersInfo>
          </S.Footer>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}

import React, { useState } from "react";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Guilds } from "../Guilds";

import {
  Background,
  Button,
  CategorySelect,
  GuildIcon,
  GuildProps,
  Header,
  ModalView,
  SmallInput,
  TextArea,
} from "../../components";

import * as S from "./styles";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const theme = useTheme();

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Background>
        <S.Content>
          <Header title="Agendar partida" />

          <S.Label style={{ marginBottom: 18, marginLeft: 24, marginTop: 36 }}>
            Categoria
          </S.Label>

          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelect}
          />

          <S.Form>
            <S.ServerSelectButton onPress={handleOpenGuilds}>
              <S.Select>
                {guild.icon ? <GuildIcon /> : <S.Image />}

                <S.SelectBody>
                  <S.Label>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </S.Label>
                </S.SelectBody>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </S.Select>
            </S.ServerSelectButton>

            <S.Field>
              <S.FieldContent>
                <S.Label style={{ marginBottom: 12 }}>Dia e mês</S.Label>

                <S.Column>
                  <SmallInput maxLength={2} />
                  <S.Divider>/</S.Divider>
                  <SmallInput maxLength={2} />
                </S.Column>
              </S.FieldContent>

              <S.FieldContent>
                <S.Label style={{ marginBottom: 12 }}>Hora e minuto</S.Label>

                <S.Column>
                  <SmallInput maxLength={2} />
                  <S.Divider>:</S.Divider>
                  <SmallInput maxLength={2} />
                </S.Column>
              </S.FieldContent>
            </S.Field>

            <S.Field style={{ marginBottom: 12 }}>
              <S.Label>Descrição</S.Label>
              <S.CharactersLimit>Max 100 characters</S.CharactersLimit>
            </S.Field>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <S.Footer>
              <Button title="Agendar" />
            </S.Footer>
          </S.Form>
        </S.Content>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </S.Container>
  );
}

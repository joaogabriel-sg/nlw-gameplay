import React, { useState } from "react";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Button,
  CategorySelect,
  GuildIcon,
  Header,
  SmallInput,
  TextArea,
} from "../../components";

import * as S from "./styles";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  const theme = useTheme();

  return (
    <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <S.Content>
        <Header title="Agendar partida" />

        <S.Label style={{ marginBottom: 18, marginLeft: 24, marginTop: 36 }}>
          Categoria
        </S.Label>

        <CategorySelect
          hasCheckBox
          categorySelected={category}
          setCategory={setCategory}
        />

        <S.Form>
          <S.ServerSelectButton>
            <S.Select>
              {/* <S.Image /> */}
              <GuildIcon />

              <S.SelectBody>
                <S.Label>Selecione um servidor</S.Label>
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
              <S.Label>Dia e mês</S.Label>

              <S.Column>
                <SmallInput maxLength={2} />
                <S.Divider>/</S.Divider>
                <SmallInput maxLength={2} />
              </S.Column>
            </S.FieldContent>

            <S.FieldContent>
              <S.Label>Hora e minuto</S.Label>

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
    </S.Container>
  );
}

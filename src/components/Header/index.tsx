import React, { ReactNode } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  action?: ReactNode | ReactNode[];
};

export function Header({ title, action }: Props) {
  const theme = useTheme();
  const { heading, secondary100, secondary40 } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.Container colors={[secondary100, secondary40]}>
      <S.BackButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </S.BackButton>

      <S.Title>{title}</S.Title>

      {action && <S.ActionWrapper>{action}</S.ActionWrapper>}
    </S.Container>
  );
}

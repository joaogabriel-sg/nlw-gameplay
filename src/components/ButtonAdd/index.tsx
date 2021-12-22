import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <S.Container {...rest}>
      <S.PlusIcon />
    </S.Container>
  );
}

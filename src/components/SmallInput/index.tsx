import React from "react";
import { TextInputProps } from "react-native";

import * as S from "./styles";

export function SmallInput({ ...rest }: TextInputProps) {
  return <S.Container {...rest} keyboardType="numeric" />;
}

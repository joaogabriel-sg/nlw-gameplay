import React from "react";

import * as S from "./styles";

type Props = {
  isCentered?: boolean;
};

export function ListDivider({ isCentered = false }: Props) {
  return <S.Container isCentered={isCentered} />;
}

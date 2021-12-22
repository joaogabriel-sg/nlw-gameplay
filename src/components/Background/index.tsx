import { ReactNode } from "react";
import { useTheme } from "styled-components";

import * as S from "./styles";

type Props = {
  children: ReactNode | ReactNode[];
};

export function Background({ children }: Props) {
  const theme = useTheme();
  const { secondary100, secondary80 } = theme.colors;

  return (
    <S.Container colors={[secondary80, secondary100]}>{children}</S.Container>
  );
}

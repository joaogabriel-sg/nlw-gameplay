import { useTheme } from "styled-components";

import * as S from "./styles";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const theme = useTheme();
  const { secondary70, secondary50 } = theme.colors;

  return (
    <S.Container colors={[secondary50, secondary70]}>
      <S.UserAvatar source={{ uri: urlImage }} />
    </S.Container>
  );
}

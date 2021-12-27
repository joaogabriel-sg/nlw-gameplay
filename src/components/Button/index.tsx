import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

type Props = RectButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

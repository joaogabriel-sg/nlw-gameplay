import React from "react";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const theme = useTheme();
  const { secondary70, secondary50 } = theme.colors;

  return (
    <S.Container {...rest}>
      <S.Gradient colors={[secondary50, secondary70]}>
        <S.Content isChecked={checked}>
          <S.CheckStatus isChecked={checked} />

          <Icon width={48} height={48} />

          <S.Title>{title}</S.Title>
        </S.Content>
      </S.Gradient>
    </S.Container>
  );
}

import React from "react";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

import * as S from "./styles";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  hasCheckBox = false,
  checked = false,
  ...rest
}: Props) {
  const theme = useTheme();
  const { secondary75, secondary70, secondary50, secondary40 } = theme.colors;

  return (
    <S.Container {...rest}>
      <S.Gradient colors={[secondary50, secondary70]}>
        <S.InternGradient
          colors={[checked ? secondary75 : secondary50, secondary40]}
          isChecked={checked}
        >
          {hasCheckBox && <S.CheckStatus isChecked={checked} />}

          <Icon width={48} height={48} />

          <S.Title>{title}</S.Title>
        </S.InternGradient>
      </S.Gradient>
    </S.Container>
  );
}

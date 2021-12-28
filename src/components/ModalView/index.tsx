import React, { ReactNode } from "react";
import { Modal, ModalProps } from "react-native";

import { Background } from "../Background";

import * as S from "./styles";

type Props = ModalProps & {
  children: ReactNode | ReactNode[];
};

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <S.Overlay>
        <S.Container>
          <Background>
            <S.Bar />
            {children}
          </Background>
        </S.Container>
      </S.Overlay>
    </Modal>
  );
}

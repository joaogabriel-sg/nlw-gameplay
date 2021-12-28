import React, { ReactNode } from "react";
import { Modal, ModalProps, TouchableWithoutFeedback } from "react-native";

import { Background } from "../Background";

import * as S from "./styles";

type Props = ModalProps & {
  children: ReactNode | ReactNode[];
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <S.Overlay>
          <S.Container>
            <Background>
              <S.Bar />
              {children}
            </Background>
          </S.Container>
        </S.Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

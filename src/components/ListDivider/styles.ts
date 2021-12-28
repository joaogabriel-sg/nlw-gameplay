import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type ContainerProps = {
  isCentered: boolean;
};

export const Container = styled.View<ContainerProps>`
  background: ${({ theme }) => theme.colors.secondary40};
  width: 78%;
  height: ${RFValue(1)}px;

  align-self: flex-end;

  ${({ isCentered }) =>
    isCentered
      ? css`
          margin: 12px 0;
        `
      : css`
          margin-top: ${RFValue(2)}px;
          margin-bottom: 31px;
        `}
`;

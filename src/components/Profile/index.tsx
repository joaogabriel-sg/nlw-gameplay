import { Avatar } from "../Avatar";

import * as S from "./styles";

export function Profile() {
  return (
    <S.Container>
      <Avatar urlImage="https://github.com/joaogabriel-sg.png" />

      <S.Content>
        <S.User>
          <S.Greeting>Olá, </S.Greeting>
          <S.UserName>João Gabriel</S.UserName>
        </S.User>

        <S.Message>Hoje é dia de vitória.</S.Message>
      </S.Content>
    </S.Container>
  );
}

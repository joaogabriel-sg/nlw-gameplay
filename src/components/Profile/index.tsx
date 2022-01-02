import { Avatar } from "../Avatar";

import { useAuth } from "../../shared/hooks";

import * as S from "./styles";

export function Profile() {
  const { user } = useAuth();

  return (
    <S.Container>
      <Avatar urlImage={user.avatar} />

      <S.Content>
        <S.User>
          <S.Greeting>Olá, </S.Greeting>
          <S.UserName>{user.username}</S.UserName>
        </S.User>

        <S.Message>Hoje é dia de vitória.</S.Message>
      </S.Content>
    </S.Container>
  );
}

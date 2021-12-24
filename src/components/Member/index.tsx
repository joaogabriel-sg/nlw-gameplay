import React from "react";

import { Avatar } from "../Avatar";

import * as S from "./styles";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const isOnline = data.status === "online";

  return (
    <S.Container>
      <Avatar urlImage={data.avatar_url} />

      <S.Content>
        <S.UserName>{data.username}</S.UserName>

        <S.Status>
          <S.BulletStatus isOnline={isOnline} />
          <S.StatusName>{isOnline ? "Disponível" : "Ocupado"}</S.StatusName>
        </S.Status>
      </S.Content>
    </S.Container>
  );
}

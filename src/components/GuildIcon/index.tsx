import React from "react";

import * as S from "./styles";

export function GuildIcon() {
  const uri =
    "https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj";

  return <S.Container source={{ uri }} resizeMode="cover" />;
}

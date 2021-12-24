import { useEffect, useState } from "react";
import {
  Appointment,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Profile,
} from "../../components";

import * as S from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    category === categoryId ? setCategory("") : setCategory(categoryId);
  }

  useEffect(() => {}, []);

  return (
    <Background>
      <S.Container>
        <S.Header>
          <Profile />
          <ButtonAdd />
        </S.Header>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <S.Content>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <S.MatchesList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </S.Content>
      </S.Container>
    </Background>
  );
}

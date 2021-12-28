import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Appointment,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Profile,
} from "../../components";

import { RootNavigationProp } from "../../routes/types";

import * as S from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const navigation = useNavigation<RootNavigationProp>();

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

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <S.Container>
        <S.Header>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </S.Header>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <S.MatchesList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </S.Container>
    </Background>
  );
}

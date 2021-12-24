import { NavigationProp, useNavigation } from "@react-navigation/native";

import { Background, ButtonIcon } from "../../components";

import { RootStackParamList } from "../../routes/types";

import IllustrationImg from "../../shared/assets/illustration.png";

import * as S from "./styles";

export function SignIn() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <S.Container>
        <S.Illustration source={IllustrationImg} resizeMode="stretch" />

        <S.Content>
          <S.Title>
            Conecte-se{"\n"}e organize suas{"\n"}jogatinas
          </S.Title>

          <S.Subtitle>
            Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
          </S.Subtitle>

          <ButtonIcon
            onPress={() => handleSignIn()}
            title="Entrar com Discord"
          />
        </S.Content>
      </S.Container>
    </Background>
  );
}

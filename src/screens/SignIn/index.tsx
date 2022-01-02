import { ActivityIndicator, Alert } from "react-native";
import { useTheme } from "styled-components";

import { Background, ButtonIcon } from "../../components";

import { useAuth } from "../../shared/hooks";

import IllustrationImg from "../../shared/assets/illustration.png";

import * as S from "./styles";

export function SignIn() {
  const { isLoading, signIn } = useAuth();

  const theme = useTheme();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert(error);
    }
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

          {isLoading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              onPress={() => handleSignIn()}
              title="Entrar com Discord"
            />
          )}
        </S.Content>
      </S.Container>
    </Background>
  );
}

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth";

import { SignIn } from "../screens";

import { useAuth } from "../shared/hooks";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}

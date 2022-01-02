import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

import { AppointmentCreate, AppointmentDetails, Home } from "../../screens";
import { AuthStackParamList } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
}

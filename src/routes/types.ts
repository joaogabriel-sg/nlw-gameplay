import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./auth/types";

export type RootStackParamList = AuthStackParamList & { SignIn: undefined };

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

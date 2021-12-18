import { ThemeProvider } from "styled-components";

import { SignIn } from "./src/screens";

import { theme } from "./src/shared/styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

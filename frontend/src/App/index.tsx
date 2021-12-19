import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import {
  AppBackground,
  AppHeader,
  AppMain,
  AppSidebar,
  AppContainer,
  AppFooter,
} from "./styles";
import Card from "../components/Card";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBackground>
        <AppHeader>Header</AppHeader>
        <AppMain>
          <AppSidebar>sidebar</AppSidebar>
          <AppContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </AppContainer>
        </AppMain>
        <AppFooter>Footer</AppFooter>
      </AppBackground>
    </ThemeProvider>
  );
}

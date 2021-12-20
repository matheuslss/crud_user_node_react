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
import Router from "../routes";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBackground>
        <AppHeader>
          <h1>CRUD de Usuários Node React</h1>
        </AppHeader>
        <AppMain>
          <AppSidebar>
            <h2>Menu</h2>
            <Link to="/signup">
              <button>Cadastrar Usuário</button>
            </Link>
            <Link to="/">
              <button>Listar Usuários</button>
            </Link>
          </AppSidebar>
          <AppContainer>
            <Router />
          </AppContainer>
        </AppMain>
        <AppFooter>
          <span>&copy; Todos os direitos reservados</span>
        </AppFooter>
      </AppBackground>
    </ThemeProvider>
  );
}

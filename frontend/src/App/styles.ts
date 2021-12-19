import styled from "styled-components";

export const AppBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "header header header"
    ".      main   ."
    "footer footer footer";
  grid-template-columns: 1fr 1200px 1fr;
  grid-template-rows: auto 1fr auto;

  @media (max-width: 980px) {
    grid-template-areas:
      "header header header"
      "main      main   main"
      "footer footer footer";
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const AppHeader = styled.header`
  background-color: blue;
  height: 70px;
  display: grid;
  grid-area: header;
  grid-template-columns: 1fr;
  justify-content: center;
`;

export const AppFooter = styled.footer`
  background-color: yellow;
  height: 60px;
  display: grid;
  grid-area: footer;
  grid-template-columns: 1fr;
  justify-content: center;
`;

export const AppMain = styled.main`
  background-color: #262626;
  width: 100%;
  display: grid;
  grid-area: main;
  grid-gap: 20px;
  grid-template-areas:
    "sidebar content"
    ".       content";
  grid-template-columns: 200px 1fr;
  grid-template-rows: minmax(0, auto) 1fr;

  @media (max-width: 850px) {
    grid-template-areas:
    "sidebar";
    "content";
  grid-template-columns: 1fr;
  }
`;

export const AppSidebar = styled.section`
  background-color: orange;
  margin-top: 20px;
  grid-area: sidebar;
`;

export const AppContainer = styled.div`
  margin: 25px auto 25px;
  display: grid;
  grid-area: content;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

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
  height: 70px;
  display: grid;
  grid-area: header;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AppFooter = styled.footer`
  height: 60px;
  display: grid;
  grid-area: footer;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AppMain = styled.main`
  background-color: #262626;
  width: 100%;
  display: grid;
  grid-area: main;
  grid-template-areas:
    "sidebar content"
    ".       content";
  grid-template-columns: 200px 1fr;
  grid-template-rows: minmax(0, auto) 1fr;

  @media (max-width: 850px) {
    grid-template-areas:
      "sidebar"
      "content";
    grid-template-columns: 1fr;
  }
`;

export const AppSidebar = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  grid-area: sidebar;
  margin: 25px 10px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  a {
    height: 60px;
    display: flex;
    font-size: 14px;
    font-weight: 400;

    &:hover,
    &:focus,
    &:active {
      color: inherit;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    button {
      background-color: #262626;
      height: 60px;
      width: 100%;
      color: #fff !important;
      border-radius: 10px;
      border: none;
      cursor: pointer;

      &:hover a {
        color: white !important;
      }
    }
  }
`;

export const AppContainer = styled.div`
  grid-area: content;
`;

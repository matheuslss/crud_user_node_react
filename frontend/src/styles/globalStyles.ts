import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    input:focus, textarea:focus, select:focus {
        outline: none;
    } 

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
         
        &:hover {
            filter: opacity(0.8)
        }
    }

    .font-bold {
        font-weight: 700;
    }

    .h1{
        font-weight: 700;
        font-size: 2rem;
        line-height: 28px;
        color: #000000;
    }

    .h2{
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 28px;
        color: #000000;
    }
`;

export default GlobalStyles;

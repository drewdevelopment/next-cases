import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased,
  }
`;

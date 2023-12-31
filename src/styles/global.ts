import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral[600]};
  }

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  p {
    font-size: 1rem;
  }

  input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    outline: none;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary[700]};
    }

  }

  button {
    padding: 0.75rem 3rem;
    border: none;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.primary[600]};

    &:hover {
      cursor: pointer;
    }
  }
`;

"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 6rem 0 0 27rem;
  overflow: hidden;
`;

export const Introduction = styled.main`
  display: flex;
  flex-direction: column;
  width: 27rem;
  height: 31.125rem;
  gap: 2rem;

  header {
    height: 6.25rem;
    width: 100%;
    margin-bottom: 3rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  section {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;

    button {
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary[700]};
      }

      &:active {
      background-color: ${({ theme }) => theme.colors.primary[900]};
    }
    }
  }
`;

interface ICTA {
  isActive: boolean;
}

export const CTA = styled.button<ICTA>`
  all: unset;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  color: ${({ theme }) => theme.colors.primary[600]};

  ${({ isActive, theme }) =>
    isActive && {
      background: theme.colors.primary[100],
    }}

  &:hover {
    color: ${({ theme }) => theme.colors.primary[700]};
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 60rem;
  height: 100vh;
  background-color: red;
`;

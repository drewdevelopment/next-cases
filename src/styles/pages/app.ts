"use client"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding-left: 27rem;
`;

export const Introduction = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 30rem;

  header {
    height: 6.25rem;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 60rem;
  height: 100vh;
  background-color: red;
`;
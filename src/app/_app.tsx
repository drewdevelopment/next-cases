"use client"
import IntroductionSection from "@/components/introduction";
import { StyledThemeProvider } from "@/providers/theme-provider";
import { GlobalStyles } from "@/styles/global";
import { Container, Content } from "@/styles/pages/app";
import { ReactNode } from "react";

export default function App({
  children,
}: {
  children: ReactNode
}) {
  return (
    <StyledThemeProvider>
      <GlobalStyles />
      <Container>
        <IntroductionSection />
        <Content>
          {children}
        </Content>
      </Container>
    </StyledThemeProvider>
  )
}

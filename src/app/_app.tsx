"use client"
import { StyledThemeProvider } from "@/providers/theme-provider";
import { GlobalStyles } from "@/styles/global";
import { ReactNode } from "react";

export default function App({
  children,
}: {
  children: ReactNode
}) {
  return (
    <StyledThemeProvider>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  )
}

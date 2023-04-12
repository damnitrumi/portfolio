import { render, RenderResult } from "@testing-library/react";
import { PageThemeProvider } from "contexts/PageTheme";

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<PageThemeProvider>{children}</PageThemeProvider>);
};

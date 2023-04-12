import React, { createContext, useCallback, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

export type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: "light" | "dark") => void;
};

export const PageThemeContext = createContext<BlogThemeContextValues>({
  theme,
});

export const PageThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setBlogTheme(newTheme);
  }, []);

  const handleSetTheme: BlogThemeContextValues["setTheme"] = useCallback(
    (mode = "dark") => {
      if (mode === "dark") {
        setBlogTheme(theme);
        localStorage.setItem("theme", JSON.stringify(theme));
      } else {
        const newTheme = {
          ...theme,
          name: "light",
          colors: {
            primaryColor: "#FFFFFF",
            secondaryColor: "#dc143c",
            white: "#000000",
            black: "#FFFFFF",
            mediumGray: "#DDDDDD",
            hoverGreen: "#06c819",
            menuGray: "#616161",
            mediaGray: "#272727",
          },
        };
        setBlogTheme(newTheme);
        localStorage.setItem("theme", JSON.stringify(newTheme));
      }
    },
    [],
  );

  return (
    <PageThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </PageThemeContext.Provider>
  );
};

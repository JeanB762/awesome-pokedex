import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material/styles";

import { LightTheme } from "themes/LightTheme";
import { DarkTheme } from "themes/DarkTheme";
import { Box } from "@mui/material";

interface ThemeContextInterface {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext({} as ThemeContextInterface);

export const usePokedexThemeContext = () => {
  return useContext(ThemeContext);
};

export const PokedexThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  const setLocalStorageTheme = (themeName: unknown) => {
    window.localStorage.setItem(
      "awessomePokedexTheme/pokedex",
      JSON.stringify(themeName)
    );
  };

  const getThemeFromLocaStorage = () => {
    const pokedexTheme = JSON.parse(
      window.localStorage.getItem("awessomePokedexTheme/pokedex") || ""
    );
    if (pokedexTheme.length > 0) {
      setThemeName(pokedexTheme);
    }
  };

  useEffect(() => {
    getThemeFromLocaStorage();
  }, []);

  useEffect(() => {
    setLocalStorageTheme(themeName);
  }, [themeName]);

  const toggleTheme = useCallback(() => {
    setThemeName((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") {
      return LightTheme;
    }
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100%"
          height="100%"
          minHeight="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

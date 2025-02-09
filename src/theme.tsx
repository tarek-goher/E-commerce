// import React from "react";
import { createContext, useState, useMemo } from "react";
import { createTheme, Theme, PaletteMode } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

interface CustomThemeOptions {
  palette: {
    mode: PaletteMode;
    background?: {
      default: string;
      paper: string;
    };
    text?: {
      primary: string;
    };
    neutral?: {
      main: string;
    };
    favColor?: {
      main: string;
    };
  };
}

export const getDesignTokens = (mode: PaletteMode): CustomThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          mycolor: {
            main: "#f6f9fc",
          },
          // Light mode settings
          background: {
            default: "#ffffff",
            paper: "#f5f5f5",
          },
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // Dark mode settings
          mycolor: {
            main: "#252n32",
          },
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

interface ColorContextType {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorContextType>({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, ColorContextType] => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("mode") as PaletteMode) || "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode);
          return newMode;
        }),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};

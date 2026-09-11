import { createTheme, type PaletteMode, type ThemeOptions } from "@mui/material";

export type ColorMode = PaletteMode;

const typography: ThemeOptions["typography"] = {
  fontFamily: '"Inter", sans-serif',
  h1: { fontWeight: 800 },
  h2: { fontWeight: 800 },
  h3: { fontWeight: 700 },
  h4: { fontWeight: 700 },
};

const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: { textTransform: "none", borderRadius: 8, fontWeight: 600 },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: { boxShadow: "none" },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: { backgroundImage: "none" },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 16, boxShadow: "none" },
    },
  },
};

// Palette, radii, and type scale follow docs/Harvor_Styleguide_v1.1.md and
// docs/Harvor_Brand_Guidelines_v1.1.md — navy/slate/white surfaces in light
// mode and navy surfaces in dark mode, blue reserved for primary actions and
// emphasis, generous radius, minimal shadow.
export function getTheme(mode: ColorMode) {
  return createTheme({
    palette:
      mode === "light"
        ? {
            mode,
            primary: { main: "#3566f5", dark: "#2f6bff" },
            success: { main: "#3cb371" },
            warning: { main: "#e6a23c" },
            error: { main: "#e05252" },
            background: { default: "#ffffff", paper: "#f7f9fc" },
            text: {
              primary: "#081529",
              secondary: "#41506a",
              disabled: "#9aa7bd",
            },
            divider: "#dce5f2",
          }
        : {
            mode,
            primary: { main: "#6e95ff", dark: "#3566f5" },
            success: { main: "#3cb371" },
            warning: { main: "#e6a23c" },
            error: { main: "#e05252" },
            background: { default: "#081529", paper: "#10203a" },
            text: {
              primary: "#ffffff",
              secondary: "#b8c2d8",
              disabled: "#66758f",
            },
            divider: "#243552",
          },
    typography,
    shape: { borderRadius: 12 },
    components,
  });
}

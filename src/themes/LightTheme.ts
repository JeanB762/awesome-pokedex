import { createTheme } from "@mui/material";
import { blue, cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: blue[900],
      light: blue[500],
      contrastText: "#FFF",
    },
    secondary: {
      main: cyan[700],
      dark: cyan[900],
      light: cyan[500],
      contrastText: "#FFF",
    },
    background: {
      default: "#f7f6f3",
      paper: "#FFF",
    },
  },
});

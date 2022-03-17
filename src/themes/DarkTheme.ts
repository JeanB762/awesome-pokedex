import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0770bb",
      contrastText: "#FFF",
    },
    secondary: {
      main: cyan[700],
      contrastText: "#FFF",
    },
    background: {
      default: "#0A1929",
      paper: "#303134",
    },
  },
});

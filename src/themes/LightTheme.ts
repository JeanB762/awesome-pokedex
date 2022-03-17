import { createTheme } from "@mui/material";
import { blue, cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      contrastText: "#FFF",
    },
    secondary: {
      main: cyan[700],
      contrastText: "#FFF",
    },
    background: {
      default: "#f7f6f3",
      paper: "#FFF",
    },
  },
});

import { createTheme } from "@material-ui/core/styles";
import * as colors from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.secondaryColor,
    },
    info: {
      main: colors.infoColor,
    },
    success: {
      main: colors.successColor,
    },
    error: {
      main: colors.errorColor,
    },
    warning: {
      main: colors.warningColor,
    },
  },
});

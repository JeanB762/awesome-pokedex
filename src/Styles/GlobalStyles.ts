import { createGlobalStyle } from "styled-components";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "react-toastify/dist/ReactToastify.css";

import * as colors from "utils/colors";

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    background-color: ${colors.backgroundColor};
    color: ${colors.lightColor};
  }
  #root, body {
    height: 100%;
    width: 100%;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    &:focus {
      outline: none;
      border: none;
    }
  }

  body .Toastify .Toastify_toast-container .Toastify_toast--success{
    background-color: ${colors.successColor};

  }

  body .Toastify .Toastify_toast-container .Toastify_toast--error{
    background-color: ${colors.errorColor};

  }

  body .Toastify .Toastify_toast-container .Toastify_toast--warning{
    background-color: ${colors.warningColor};

  }
`;

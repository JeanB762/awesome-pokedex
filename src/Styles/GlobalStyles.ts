import { createGlobalStyle } from "styled-components";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { backgroundColor, lightColor } from "utils/colors";

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
    background-color: ${backgroundColor};
    color: ${lightColor};
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
`;

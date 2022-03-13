import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "Styles/GlobalStyles";
import Routes from "routes";
import NavMenu from "components/NavBar/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavMenu />
      <Routes />
    </BrowserRouter>
  );
}

export default App;

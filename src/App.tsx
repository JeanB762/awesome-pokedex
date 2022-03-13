import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import GlobalStyles from "Styles/GlobalStyles";
import Routes from "routes";
import NavMenu from "components/NavBar/index";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavMenu />
      <Routes />
      <ToastContainer autoClose={3500} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import GlobalStyles from "Styles/GlobalStyles";
import Routes from "routes";
import NavMenu from "components/NavBar/index";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/hooks/queryClient";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <NavMenu />
        <Routes />
        <ToastContainer autoClose={3500} className="toast-container" />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

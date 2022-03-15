import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import GlobalStyles from "Styles/GlobalStyles";
import Routes from "routes";
import NavMenu from "components/NavBar/index";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "services/hooks/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <NavMenu />
        <Routes />
        <ToastContainer autoClose={3500} className="toast-container" />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

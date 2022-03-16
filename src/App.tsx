import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import PokedexProvider from "providers/pokedexProvider";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "Styles/GlobalStyles";
import Routes from "routes";
import NavMenu from "components/NavBar/index";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "services/hooks/queryClient";
import { theme } from "utils/theme";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <PokedexProvider>
            <GlobalStyles />
            <NavMenu />
            <Routes />
            <ToastContainer autoClose={3500} className="toast-container" />
          </PokedexProvider>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

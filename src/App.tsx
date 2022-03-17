import React from "react";
import { BrowserRouter } from "react-router-dom";
import PokedexProvider from "services/context/pokedexProviderContext";
import { ToastContainer } from "react-toastify";
import Routes from "routes";
import NavMenu from "components/NavBar/index";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "services/hooks/queryClient";
import { PokedexThemeProvider } from "services/context/themeProviderContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokedexThemeProvider>
        <BrowserRouter>
          <PokedexProvider>
            <NavMenu />
            <Routes />
            <ToastContainer autoClose={3500} className="toast-container" />
          </PokedexProvider>
        </BrowserRouter>
        <ReactQueryDevtools />
      </PokedexThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

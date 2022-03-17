import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "react-query";

import Routes from "routes";
import PokedexProvider from "services/context/pokedexProviderContext";

import { NavMenu } from "components/NavBar/index";
import { PokedexThemeProvider } from "services/context/themeProviderContext";
import { DrawerProvider } from "services/context/drawerContext";
import { queryClient } from "services/hooks/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokedexThemeProvider>
        <DrawerProvider>
          <BrowserRouter>
            <PokedexProvider>
              <NavMenu>
                <Routes />
              </NavMenu>
              <ToastContainer autoClose={3500} className="toast-container" />
            </PokedexProvider>
          </BrowserRouter>
        </DrawerProvider>
      </PokedexThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import { Routes as RouteDOM, Route } from "react-router-dom";
import Home from "pages/Home";
import Pokedex from "pages/Pokedex";
import PokemonProfile from "pages/PokemonProfile";
import NotFound from "pages/pageNotFound";

const Routes: React.FC = () => {
  return (
    <RouteDOM>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route
        path="/pokedex/pokemon/:pokemonName"
        element={<PokemonProfile />}
      />
      <Route path="/*" element={<NotFound />} />
    </RouteDOM>
  );
};

export default Routes;

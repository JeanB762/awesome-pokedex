import React from "react";
import { Routes as RouteDOM, Route } from "react-router-dom";
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Pokedex from "pages/Pokedex";
import PokemonProfile from "pages/PokemonProfile";
import NotFound from "pages/PageNotFound";

const Routes: React.FC = () => {
  return (
    <RouteDOM>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route
        path="/pokedex/pokemon/:pokemonName"
        element={<PokemonProfile />}
      />
      <Route path="/pokemonSearch/:searchTherm" element={<SearchResults />} />
      <Route path="/*" element={<NotFound />} />
    </RouteDOM>
  );
};

export default Routes;

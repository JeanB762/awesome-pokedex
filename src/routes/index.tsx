import React from "react";
import { Routes as RouteDOM, Route } from "react-router-dom";
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Pokedex from "pages/Pokedex";
import PokemonProfile from "pages/PokemonProfile";
import NotFound from "pages/PageNotFound";
import ListByType from "pages/ListByType";

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
      <Route path="/pokemonSearch/*" element={<SearchResults />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/type/:type" element={<ListByType />} />
    </RouteDOM>
  );
};

export default Routes;

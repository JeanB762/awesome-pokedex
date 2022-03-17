import React, { useEffect, useState, createContext } from "react";
import { Pokemon } from "../DTO/pokemonsDTO";

interface Pokedex {
  pokedex: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemon: Pokemon) => void;
}

const pokedexDefaultValues: Pokedex = {
  pokedex: [],
  addPokemon: () => {
    return;
  },
  removePokemon: () => {
    return;
  },
};

export const PokedexContext = createContext<Pokedex>(pokedexDefaultValues);

const PokedexProvider: React.FC = ({ children }) => {
  const [pokedex, setPokedex] = useState<Pokemon[]>(
    pokedexDefaultValues.pokedex
  );

  const getFromLocaStorage = () => {
    const localPokedex = JSON.parse(
      window.localStorage.getItem("awessomePokedex/pokedex") || "[]"
    );
    if (localPokedex.length > 0) {
      setPokedex(localPokedex);
    }
  };

  useEffect(() => {
    getFromLocaStorage();
  }, []);

  const setLocalStorage = (pokedex: Pokemon[]) => {
    window.localStorage.setItem(
      "awessomePokedex/pokedex",
      JSON.stringify(pokedex)
    );
  };

  const addPokemon = (newPokemon: Pokemon) => {
    const alreadyExist = pokedex.filter(
      (pokemon) => pokemon.name == newPokemon.name
    );
    if (alreadyExist.length == 0) {
      const newPokedex = [...pokedex, newPokemon];
      setPokedex(newPokedex);
      setLocalStorage(newPokedex);
    }
    console.log("alreadyExist >>> ", alreadyExist);
  };

  const removePokemon = (pokemonToRemove: Pokemon) => {
    const newPokedex = pokedex.filter(
      (pokemon) => pokemon.name != pokemonToRemove.name
    );

    setPokedex(newPokedex);
    setLocalStorage(newPokedex);
  };

  return (
    <PokedexContext.Provider
      value={{
        pokedex,
        addPokemon,
        removePokemon,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;

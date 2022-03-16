import Pokemon from "pages/Pokemon";
import React, { useEffect, useState } from "react";

interface Pokedex {
  pokedex: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemon: Pokemon) => void;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface PokemonTypesResponse {
  slot: number;
  type: PokemonTypes;
}

interface PokemonTypes {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
  id: number;
  sprites: Sprites;
  types: PokemonTypesResponse[];
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

export const PokedexContext =
  React.createContext<Pokedex>(pokedexDefaultValues);

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

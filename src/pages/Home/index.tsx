import Pokemon from "pages/Pokemon";
import React, { useEffect, useState } from "react";

import { api } from "../../services/api";

import { AppContainer, PokemonPrimaryCard } from "./style";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonsResponse>();
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      setIsLoading(true);
      const responsePokemon = await api.get<PokemonsResponse>(
        "/pokemon?limit=21"
      );
      setPokemons(responsePokemon.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(pokemons?.results);
  }, [pokemons]);

  return (
    <>
      {!isLoading ? (
        <AppContainer>
          {pokemons?.results.map((pokemon) => {
            return (
              <PokemonPrimaryCard key={pokemon.name}>
                <h3>{pokemon.name}</h3>
                <p>{pokemon.url}</p>
              </PokemonPrimaryCard>
            );
          })}
        </AppContainer>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
};
export default Home;

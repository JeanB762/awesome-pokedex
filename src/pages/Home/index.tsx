import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import Pokemon from "pages/Pokemon";
import SearchBar from "./components/SearchBar";
import { PokemonPrimaryCard, FloatingButtom } from "./style";
import { AppContainer } from "Styles/GlobalLayoutComponents";

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
        "/pokemon?limit=6"
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

  const avatarUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

  return (
    <>
      {!isLoading ? (
        <>
          <AppContainer>
            <h1>Pokemons</h1>
          </AppContainer>
          <AppContainer>
            <SearchBar />
          </AppContainer>
          <AppContainer>
            {pokemons?.results.map((pokemon) => {
              return (
                <PokemonPrimaryCard key={pokemon.name}>
                  <h3>{pokemon.name}</h3>
                  <Link to={`/pokemon/${pokemon.name}`}>
                    <img src={avatarUrl} />
                  </Link>
                  <p>{pokemon.url}</p>
                </PokemonPrimaryCard>
              );
            })}
          </AppContainer>
          <AppContainer>
            <FloatingButtom variant="extended">
              Mostrar mais resultados...
            </FloatingButtom>
          </AppContainer>
        </>
      ) : (
        <AppContainer>
          <h1>loading...</h1>
        </AppContainer>
      )}
    </>
  );
};
export default Home;

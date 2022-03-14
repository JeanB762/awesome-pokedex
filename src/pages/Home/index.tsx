import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import SearchBar from "./components/SearchBar";
import { PokemonCardContainer, FloatingButtom } from "./style";
import { AppContainer } from "Styles/GlobalLayoutComponents";
import { api } from "services/api";

interface PokemonResponseData {
  name: string;
  url: string;
}

interface PokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonResponseData[];
}

const Home: React.FC = () => {
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);

  const { data: pokemons, isFetching } = useQuery<PokemonsResponse>(
    "pokemons",
    async () => {
      const response = await api.get(
        `/pokemon/?offset=${offset}&limit=${limit}`
      );

      return response.data;
    },
    {
      staleTime: 1000 * 30, // 30 Seconds
    }
  );

  const avatarUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

  return (
    <>
      {!isFetching ? (
        <>
          <AppContainer>
            <h1>Pokemons</h1>
          </AppContainer>
          <AppContainer>
            <SearchBar />
          </AppContainer>
          <AppContainer>
            {pokemons?.results?.map((pokemon) => {
              const id = pokemon.url.split("/")[6];
              return (
                <PokemonCardContainer key={pokemon.name}>
                  <h3>
                    <strong style={{ fontSize: 24 }}>#{id}</strong>{" "}
                    {pokemon.name}
                  </h3>
                  <Link to={`/pokemon/${pokemon.name}`}>
                    <img src={avatarUrl} />
                  </Link>
                </PokemonCardContainer>
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

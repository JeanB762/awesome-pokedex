import PokemonCard from "components/PokemonCard";
import { CustomButtom } from "pages/Home/style";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { api } from "services/api";
import { AppContainer } from "Styles/GlobalLayoutComponents";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePokemons } from "services/hooks/Pokemons/usePokemons";

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

const Pokedex: React.FC = () => {
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);

  const [pokedexPokemons, setPokedexPokemons] = useState<PokemonsResponse>();

  const { data: pokemons, isFetching } = usePokemons(offset, limit);

  return (
    <>
      {!isFetching ? (
        <>
          <AppContainer>
            <h1>Pokedex</h1>
          </AppContainer>

          <AppContainer>
            {pokemons?.results?.map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={pokemon.name} />;
            })}
          </AppContainer>
          <AppContainer>
            <CustomButtom
              disabled={!offset}
              onClick={() => setOffset(offset - limit)}
            >
              <ChevronLeftIcon />
            </CustomButtom>

            <CustomButtom onClick={() => setOffset(offset + limit)}>
              <ChevronRightIcon />
            </CustomButtom>
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

export default Pokedex;

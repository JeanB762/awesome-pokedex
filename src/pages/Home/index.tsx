import React, { useEffect, useState } from "react";

import SearchBar from "../../components/SearchBar";
import { CustomButtom } from "./style";
import { AppContainer } from "Styles/GlobalLayoutComponents";
import PokemonCard from "../../components/PokemonCard";
import { usePokemons } from "services/hooks/Pokemons/usePokemons";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home: React.FC = () => {
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);

  const { data: pokemons, isFetching } = usePokemons(offset, limit);
  useEffect(() => {
    console.log(offset - limit);
  }, [offset]);

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
export default Home;

import React, { useContext, useEffect } from "react";
import { PokedexContext } from "providers/pokedexProvider";
import { AppContainer } from "Styles/GlobalLayoutComponents";
import PokemonCard from "components/PokemonCard";
import { Button } from "@mui/material";

const Pokedex: React.FC = () => {
  const { pokedex, addPokemon, removePokemon } = useContext(PokedexContext);

  return (
    <>
      <AppContainer>
        <h1>Pokedex</h1>
      </AppContainer>

      <AppContainer>
        {pokedex.map((pokemon) => {
          return (
            <>
              <PokemonCard name={pokemon.name} key={pokemon.name} />
              <Button key={pokemon.id} onClick={() => removePokemon(pokemon)}>
                Remover
              </Button>
            </>
          );
        })}
      </AppContainer>
    </>
  );
};

export default Pokedex;

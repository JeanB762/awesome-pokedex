import React, { useContext } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import PokemonCardContainer from "./PokemonCard";

import { usePokemon } from "../../services/hooks/Pokemon/usePokemon";

import { Box, Button, Tooltip, Typography } from "@mui/material";

import { PokedexContext } from "services/context/pokedexProviderContext";

interface PropsInterface {
  name: string;
}

const PokemonCard: React.FC<PropsInterface> = ({ name }: PropsInterface) => {
  const { addPokemon } = useContext(PokedexContext);

  const { data: pokemon, isFetching } = usePokemon(name);

  let pokemonTypesArray: string[] = [];
  if (pokemon?.types) {
    pokemon?.types.forEach((item) => {
      pokemonTypesArray = [...pokemonTypesArray, item.type.name];
    });
  }
  const pokemonTypes = pokemonTypesArray.join(" | ");

  return (
    <>
      {!isFetching ? (
        <>
          <PokemonCardContainer key={pokemon?.name}>
            <Typography variant="h6"> #{pokemon?.id}</Typography>
            <Typography> {pokemon?.name}</Typography>
            <img
              src={pokemon?.sprites.front_default}
              height="100px"
              width="100px"
            />
            <Typography margin={2}>{pokemonTypes}</Typography>
            <Tooltip title="Add to Pokedex">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  if (pokemon) {
                    addPokemon(pokemon);
                  }
                }}
              >
                <CatchingPokemonIcon />
              </Button>
            </Tooltip>
          </PokemonCardContainer>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default PokemonCard;

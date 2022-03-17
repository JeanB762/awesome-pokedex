import React, { useContext } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import { PokemonCardContainer } from "./style";

import { usePokemon } from "../../services/hooks/Pokemon/usePokemon";

import { Box, Button, Tooltip } from "@mui/material";

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
        <PokemonCardContainer key={pokemon?.name}>
          <p>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              #{pokemon?.id}
            </span>{" "}
            {pokemon?.name}
          </p>
          <img src={pokemon?.sprites.front_default} />
          <Box marginBottom={2}>{pokemonTypes}</Box>
          <Tooltip title="Add to Pokedex">
            <Button
              variant="outlined"
              color="info"
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
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default PokemonCard;

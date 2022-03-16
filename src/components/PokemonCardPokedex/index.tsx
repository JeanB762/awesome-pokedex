import React, { useContext } from "react";

import { PokemonCardContainer } from "./style";

import { usePokemon } from "../../services/hooks/Pokemon/usePokemon";
import { Box, Button, Tooltip } from "@mui/material";

import { PokedexContext } from "providers/pokedexProvider";
import { Delete } from "@mui/icons-material";

interface PropsInterface {
  name: string;
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

interface PokemonTypes {
  name: string;
  url: string;
}

interface PokemonTypesResponse {
  slot: number;
  type: PokemonTypes;
}

interface Pokemon {
  name: string;
  id: number;
  sprites: Sprites;
  types: PokemonTypesResponse[];
}

const PokemonCard: React.FC<PropsInterface> = ({ name }: PropsInterface) => {
  const { removePokemon } = useContext(PokedexContext);

  const { pokemon, isFetching } = usePokemon<Pokemon>(name);

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
          <Tooltip title="Remove from Pokedex">
            <Button
              variant="outlined"
              color="info"
              onClick={() => {
                if (pokemon) removePokemon(pokemon);
              }}
            >
              <Delete />
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

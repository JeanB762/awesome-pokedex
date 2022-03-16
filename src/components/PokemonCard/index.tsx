import React, { useContext } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import { PokemonCardContainer } from "./style";

import { usePokemon } from "../../services/hooks/Pokemon/usePokemon";
import { Box, Button, Tooltip } from "@mui/material";

import { PokedexContext } from "providers/pokedexProvider";

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
  const { addPokemon } = useContext(PokedexContext);

  const { pokemon, isFetching } = usePokemon<Pokemon>(name);

  let pokemonTypesArray: string[] = [];
  if (pokemon?.types) {
    pokemon?.types.forEach((item) => {
      pokemonTypesArray = [...pokemonTypesArray, item.type.name];
    });
  }

  // function handleAddPokedex(pokemon: any) {
  //   console.log(pokedex);
  //   window.localStorage.setItem("podex", [...pokedex, pokemon]);
  // }

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

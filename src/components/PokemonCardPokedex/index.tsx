import React, { useContext } from "react";

import { PokemonCardContainer } from "./style";

import { usePokemon } from "../../services/hooks/Pokemon/usePokemon";
import { Box, Button, Tooltip } from "@mui/material";

import { PokedexContext } from "services/context/pokedexProviderContext";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface PropsInterface {
  name: string;
}

const PokedexCard: React.FC<PropsInterface> = ({ name }: PropsInterface) => {
  const { removePokemon } = useContext(PokedexContext);

  // const { pokemon, isFetching } = usePokemon<Pokemon>(name);
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
          <Link to={`pokemon/${pokemon?.name}`}>
            <img src={pokemon?.sprites.front_default} />
          </Link>
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

export default PokedexCard;

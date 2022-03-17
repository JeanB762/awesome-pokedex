import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Fab, Tooltip, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { PokedexContext } from "services/context/pokedexProviderContext";
import { Pokemon } from "../../services/DTO/pokemonsDTO";

import PokemonCardContainer from "./PokemonCard";

interface PropsInterface {
  pokemon: Pokemon;
}

const PokedexCard: React.FC<PropsInterface> = ({ pokemon }: PropsInterface) => {
  const { removePokemon } = useContext(PokedexContext);
  const navigate = useNavigate();

  return (
    <>
      <PokemonCardContainer key={pokemon?.name}>
        <Typography variant="h6"> #{pokemon?.id}</Typography>
        <Typography> {pokemon?.name}</Typography>
        <Link to={`pokemon/${pokemon?.name}`}>
          <img
            src={pokemon?.sprites.front_default}
            height="100px"
            width="100px"
          />
        </Link>
        <Box
          marginBottom={3}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly"
          width="100%"
        >
          {pokemon?.types.map((type) => {
            return (
              <Fab
                variant="extended"
                size="small"
                color="secondary"
                aria-label="add"
                key={type.type.name}
                onClick={() => navigate(`/type/${type.type.name}`)}
              >
                {type.type.name}
              </Fab>
            );
          })}
        </Box>
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
    </>
  );
};

export default PokedexCard;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Fab, Tooltip, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { PokedexContext } from "services/context/pokedexProviderContext";
import { Pokemon } from "../../services/DTO/pokemonsDTO";

import PokemonCardContainer from "./PokemonCard";
import { toast } from "react-toastify";

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
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                key={type.type.name}
                onClick={() => navigate(`/type/${type.type.name}`)}
              >
                {type.type.name}
              </Button>
            );
          })}
        </Box>
        <Tooltip title="Remove from Pokedex">
          <Fab
            variant="circular"
            color="secondary"
            onClick={() => {
              if (pokemon) {
                removePokemon(pokemon);
                toast.error(pokemon.name + " Removed to Pokedex");
              }
            }}
          >
            <Delete />
          </Fab>
        </Tooltip>
      </PokemonCardContainer>
    </>
  );
};

export default PokedexCard;

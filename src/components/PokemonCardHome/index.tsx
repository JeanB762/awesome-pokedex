import React, { useContext } from "react";
import { Box, Button, Fab, Paper, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import { usePokemon } from "../../services/hooks/Pokemon/usePokemon";
import { PokedexContext } from "services/context/pokedexProviderContext";

import PokemonCardContainer from "./PokemonCard";
import { toast } from "react-toastify";

interface PropsInterface {
  name: string;
}

const PokemonCard: React.FC<PropsInterface> = ({ name }: PropsInterface) => {
  const { addPokemon } = useContext(PokedexContext);
  const navigate = useNavigate();

  const { data: pokemon, isFetching, isError } = usePokemon(name);

  return (
    <>
      {isError ? (
        <>
          <Box
            component={Paper}
            width="50%"
            margin="50px auto"
            padding={5}
            display="flex"
            justifyContent="center"
          >
            <Typography variant="body2">Pokemon Not Found</Typography>
          </Box>
        </>
      ) : (
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
                <Tooltip title="Add to Pokedex">
                  <Fab
                    variant="circular"
                    color="secondary"
                    onClick={() => {
                      if (pokemon) {
                        addPokemon(pokemon);
                        toast.success(pokemon.name + " Added from Pokedex");
                      }
                    }}
                  >
                    <CatchingPokemonIcon />
                  </Fab>
                </Tooltip>
              </PokemonCardContainer>
            </>
          ) : (
            <Box component={Paper} margin={5} padding={5}>
              <Typography>Loading...</Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default PokemonCard;

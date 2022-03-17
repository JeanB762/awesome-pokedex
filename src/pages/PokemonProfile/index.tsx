import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { PokedexContext } from "services/context/pokedexProviderContext";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, Paper, Typography } from "@mui/material";

const PokemonProfile: React.FC = () => {
  const { pokedex } = useContext(PokedexContext);

  const { pokemonName } = useParams();
  const pokemon = pokedex.find((pokemon) => pokemonName == pokemon.name);
  console.log("pokemon >>> ", pokemon);
  const navigate = useNavigate();

  pokemon?.abilities.map((ability) => {
    console.log(ability);
  });

  return (
    <>
      {pokemon ? (
        <Paper>
          <Box>
            <Box>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<ChevronLeftIcon />}
                onClick={() => {
                  navigate("/pokedex");
                }}
              >
                Back
              </Button>
            </Box>
            <Box>
              <Typography variant="h3"> #{pokemon?.id}</Typography>
              <img
                src={pokemon?.sprites.front_default}
                height="200px"
                width="200px"
              />
              <Typography variant="h4"> {pokemon?.name}</Typography>
            </Box>
            <Box>
              <Typography> Weight: {pokemon.weight}</Typography>
            </Box>
            <Box>
              <Typography>Height: {pokemon.height} </Typography>
            </Box>
            <Box>
              <Typography>
                Types:{" "}
                {pokemon?.types.map((type) => (
                  <Typography key={type.type.name}>{type.type.name}</Typography>
                ))}
              </Typography>
            </Box>
            <Box>
              <Typography>
                Abilities:{" "}
                {pokemon?.abilities.map((ability) => {
                  return (
                    <Typography key={ability.ability.name}>
                      {ability.ability.name}{" "}
                    </Typography>
                  );
                })}
              </Typography>
            </Box>
            <Box>
              <Typography>
                {" "}
                Speed:{" "}
                {pokemon?.stats.map((stat) => {
                  if (stat.stat.name == "speed") {
                    return (
                      <Typography key={stat.base_stat}>
                        {stat.base_stat}{" "}
                      </Typography>
                    );
                  }
                })}
              </Typography>
            </Box>
            <Box>
              <Typography>
                Attack:{" "}
                {pokemon?.stats.map((stat) => {
                  if (stat.stat.name == "attack") {
                    return (
                      <Typography key={stat.base_stat}>
                        {stat.base_stat}{" "}
                      </Typography>
                    );
                  }
                })}
              </Typography>
            </Box>
            <Box>
              <Typography>
                Defense:
                {pokemon?.stats.map((stat) => {
                  if (stat.stat.name == "defense") {
                    return (
                      <Typography key={stat.base_stat}>
                        {stat.base_stat}
                      </Typography>
                    );
                  }
                })}
              </Typography>
            </Box>
            <Box>
              <Typography>
                HP:{" "}
                {pokemon?.stats.map((stat) => {
                  if (stat.stat.name == "hp") {
                    return (
                      <Typography key={stat.base_stat}>
                        {stat.base_stat}{" "}
                      </Typography>
                    );
                  }
                })}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default PokemonProfile;

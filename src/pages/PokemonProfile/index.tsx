import { Box } from "@mui/system";
import { PokedexContext } from "providers/pokedexProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { AppContainer } from "Styles/GlobalLayoutComponents";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";

const PokemonProfile: React.FC = () => {
  const { pokedex } = useContext(PokedexContext);

  const { pokemonName } = useParams();
  const pokemon = pokedex.find((pokemon) => pokemonName == pokemon.name);
  console.log("pokemon >>> ", pokemon);

  pokemon?.abilities.map((ability) => {
    console.log(ability);
  });

  return (
    <>
      {pokemon ? (
        <AppContainer
          style={{
            display: "flex, justifyContent: 'space-between', width: '100%'",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Link to="/pokedex">
              <Button color="info" startIcon={<ChevronLeftIcon />}>
                Back
              </Button>
            </Link>
          </Box>
          <Box
            marginTop={5}
            marginBottom={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={pokemon.sprites.front_default} height={250} width={250} />
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                #{pokemon.id}
              </span>{" "}
              {pokemon.name}
            </p>
          </Box>
          <Box marginBottom={2} marginTop={4}>
            Weight: <strong>{pokemon.weight}</strong>{" "}
          </Box>
          <Box marginBottom={2}>
            Height: <strong>{pokemon.height}</strong>
          </Box>
          <Box
            marginBottom={2}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Types:{" "}
            <strong>
              {pokemon?.types.map((type) => (
                <p key={type.type.name}>{type.type.name}</p>
              ))}
            </strong>
          </Box>
          <Box
            marginBottom={2}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Abilities:{" "}
            <strong>
              {pokemon?.abilities.map((ability) => {
                return (
                  <p key={ability.ability.name}>{ability.ability.name} </p>
                );
              })}
            </strong>
          </Box>
          <Box marginBottom={2}>
            Speed:{" "}
            {pokemon?.stats.map((stat) => {
              if (stat.stat.name == "speed") {
                return <strong key={stat.base_stat}>{stat.base_stat} </strong>;
              }
            })}
          </Box>
          <Box marginBottom={2}>
            Attack:{" "}
            {pokemon?.stats.map((stat) => {
              if (stat.stat.name == "attack") {
                return <strong key={stat.base_stat}>{stat.base_stat} </strong>;
              }
            })}
          </Box>
          <Box marginBottom={2}>
            Defense:{" "}
            {pokemon?.stats.map((stat) => {
              if (stat.stat.name == "defense") {
                return <strong key={stat.base_stat}>{stat.base_stat} </strong>;
              }
            })}
          </Box>
          <Box marginBottom={2}>
            HP:{" "}
            {pokemon?.stats.map((stat) => {
              if (stat.stat.name == "hp") {
                return <strong key={stat.base_stat}>{stat.base_stat} </strong>;
              }
            })}
          </Box>
        </AppContainer>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default PokemonProfile;

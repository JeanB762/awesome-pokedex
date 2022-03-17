import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Button,
  ButtonGroup,
  Fab,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { PokedexContext } from "services/context/pokedexProviderContext";

const PokemonProfile: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { pokedex, setLocalStorage } = useContext(PokedexContext);

  const { pokemonName } = useParams();
  const pokemon = pokedex.find((pokemon) => pokemonName == pokemon.name);
  const navigate = useNavigate();

  const onChange = (e: any) => {
    e.preventDefault();

    const url = "https://api.cloudinary.com/v1_1/demo/image/upload";

    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "docs_upload_example_us_preset");
      setIsLoading(true);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          const newPokedex = pokedex.map((currentPokemon) => {
            if (currentPokemon.name == pokemon?.name) {
              currentPokemon.sprites.front_default = data.url;
              return currentPokemon;
            }
            return currentPokemon;
          });
          setLocalStorage(newPokedex);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  let presentationName;
  if (pokemon) {
    presentationName =
      pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
  }

  return (
    <>
      {pokemon ? (
        <Box
          component={Paper}
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            marginTop={5}
            width="70%"
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
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
          {!isLoading ? (
            <Box component={Paper} width="70%" marginTop={5}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", marginRight: "16px" }}
                >
                  {" "}
                  #{pokemon?.id}
                </Typography>
                <Typography variant="h4"> {presentationName}</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <img
                  src={pokemon?.sprites.front_default}
                  height="200px"
                  width="200px"
                />
              </Box>

              <Box display="flex" justifyContent="center" margin={3}>
                <ButtonGroup variant="text" color="primary">
                  <Fab
                    variant="extended"
                    size="small"
                    color="secondary"
                    aria-label="add"
                  >
                    <label
                      htmlFor="image_uploads"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Change Avatar
                    </label>
                    <div style={{ display: "none" }}>
                      <input
                        type="file"
                        onChange={onChange}
                        id="image_uploads"
                        name="image_uploads"
                        accept=".jpg, .jpeg, .png"
                      />
                    </div>
                  </Fab>
                </ButtonGroup>
              </Box>
            </Box>
          ) : (
            <Box component={Paper} margin={5} padding={5}>
              <Typography>Loading...</Typography>
            </Box>
          )}
          <Box
            component={Paper}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin={3}
            width="70%"
          >
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-around"
              width="100%"
              margin={2}
            >
              <Typography variant="body1">
                {" "}
                Weight: <strong>{pokemon.weight}</strong>
              </Typography>
              <Typography variant="body1">
                Height: <strong>{pokemon.height}</strong>{" "}
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              width="100%"
              flexWrap="wrap"
              margin={2}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Typography variant="body1">Types: </Typography>
                {pokemon?.types.map((type) => {
                  return (
                    <Fab
                      variant="extended"
                      size="small"
                      color="secondary"
                      key={type.type.name}
                      onClick={() => navigate(`/type/${type.type.name}`)}
                    >
                      {type.type.name}
                    </Fab>
                  );
                })}
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Typography variant="body1">Abilities: </Typography>
                {pokemon?.abilities.map((ability) => {
                  return (
                    <Fab
                      style={{ margin: "5px 0", padding: "10px" }}
                      variant="extended"
                      size="small"
                      color="secondary"
                      aria-label="add"
                      key={ability.ability.name}
                      onClick={() => {
                        fetch(ability.ability.url)
                          .then((data) => {
                            return data.json();
                          })
                          .then((data) => {
                            toast.success(
                              "Short Effect: " +
                                data.effect_entries[1].short_effect
                            );
                          });
                      }}
                    >
                      {ability.ability.name}
                    </Fab>
                  );
                })}
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              width="100%"
              flexWrap="wrap"
              margin={2}
            >
              {pokemon?.stats.map((stat) => {
                if (stat.stat.name == "speed") {
                  return (
                    <Typography variant="body1" key={stat.base_stat}>
                      Speed: <strong>{stat.base_stat}</strong>
                    </Typography>
                  );
                }
              })}

              {pokemon?.stats.map((stat) => {
                if (stat.stat.name == "attack") {
                  return (
                    <Typography key={stat.base_stat}>
                      Attack: <strong>{stat.base_stat}</strong>
                    </Typography>
                  );
                }
              })}
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              width="100%"
              flexWrap="wrap"
              margin={2}
            >
              {pokemon?.stats.map((stat) => {
                if (stat.stat.name == "defense") {
                  return (
                    <Typography key={stat.base_stat}>
                      Defense: <strong>{stat.base_stat}</strong>
                    </Typography>
                  );
                }
              })}
              {pokemon?.stats.map((stat) => {
                if (stat.stat.name == "hp") {
                  return (
                    <Typography key={stat.base_stat}>
                      HP: <strong>{stat.base_stat}</strong>
                    </Typography>
                  );
                }
              })}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box component={Paper} margin={5} padding={5}>
          <Typography>Loading...</Typography>
        </Box>
      )}
    </>
  );
};

export default PokemonProfile;

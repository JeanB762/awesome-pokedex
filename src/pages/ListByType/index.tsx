import React from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { usePokemonsByType } from "services/hooks/PokemonsByType/usePokemonsByType";
import { useDrawerContext } from "services/context/drawerContext";

import PokemonCard from "../../components/PokemonCardHome";

import Logo from "../../assets/logo.png";

const ListByType: React.FC = () => {
  const { type } = useParams();
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { data: pokemons, isFetching } = usePokemonsByType(type || "");

  return (
    <>
      {!isFetching ? (
        <>
          <Box width="100%" display="flex" flexDirection="row">
            <Box>
              {smDown && (
                <IconButton onClick={toggleDrawerOpen}>
                  <MenuOpenIcon />
                </IconButton>
              )}
            </Box>
            <Box
              flex={1}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              marginTop={2}
            >
              <img src={Logo} height="75px" />
            </Box>
          </Box>
          <Box
            flexWrap="wrap"
            display="flex"
            maxWidth="1000px"
            margin="0 auto"
            justifyContent="center"
          >
            {pokemons?.pokemon?.map((pokemon) => {
              return (
                <PokemonCard
                  name={pokemon.pokemon.name}
                  key={pokemon.pokemon.name}
                />
              );
            })}
          </Box>
        </>
      ) : (
        <Box component={Paper} margin={5} padding={5}>
          <Typography>Loading...</Typography>
        </Box>
      )}
    </>
  );
};

export default ListByType;

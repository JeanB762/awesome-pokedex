import React, { useState } from "react";

import {
  Box,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { usePokemons } from "services/hooks/Pokemons/usePokemons";
import { useDrawerContext } from "services/context/drawerContext";

import SearchBar from "../../components/SearchBar";
import PokemonCard from "../../components/PokemonCardHome";

import Logo from "../../assets/logo.png";

const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [searchTherm, setSearchTherm] = useState("");

  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { data: pokemons, isFetching } = usePokemons(offset, limit);

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
            flex={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={5}
          >
            <SearchBar
              setSearchTherm={setSearchTherm}
              searchTherm={searchTherm}
            />
          </Box>
          <Box
            flexWrap="wrap"
            display="flex"
            maxWidth="1000px"
            margin="0 auto"
            justifyContent="center"
          >
            {pokemons?.results?.map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={pokemon.name} />;
            })}
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={2}
          >
            <IconButton
              size="large"
              disabled={!offset}
              onClick={() => setOffset(offset - limit)}
            >
              <ArrowCircleLeftIcon />
            </IconButton>

            <IconButton size="large" onClick={() => setOffset(offset + limit)}>
              <ArrowCircleRightIcon />
            </IconButton>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Box component={Paper} margin={5} padding={5}>
            <Typography>Loading...</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Home;

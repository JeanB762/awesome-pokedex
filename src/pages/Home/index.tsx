import React, { useState } from "react";

import SearchBar from "../../components/SearchBar";
import { CustomButtom } from "./style";
import { AppContainer } from "Styles/GlobalLayoutComponents";
import PokemonCard from "../../components/PokemonCardHome";
import { usePokemons } from "services/hooks/Pokemons/usePokemons";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import Logo from "../../assets/logo.png";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "services/context/drawerContext";

const Home: React.FC = () => {
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
            >
              <img src={Logo} height="100px" />
            </Box>
          </Box>
          <AppContainer>
            <SearchBar
              setSearchTherm={setSearchTherm}
              searchTherm={searchTherm}
            />
          </AppContainer>
          <AppContainer>
            {pokemons?.results?.map((pokemon) => {
              return <PokemonCard name={pokemon.name} key={pokemon.name} />;
            })}
          </AppContainer>
          <AppContainer>
            <CustomButtom
              disabled={!offset}
              onClick={() => setOffset(offset - limit)}
            >
              <ChevronLeftIcon />
            </CustomButtom>

            <CustomButtom onClick={() => setOffset(offset + limit)}>
              <ChevronRightIcon />
            </CustomButtom>
          </AppContainer>
        </>
      ) : (
        <AppContainer>
          <h1>loading...</h1>
        </AppContainer>
      )}
    </>
  );
};

export default Home;

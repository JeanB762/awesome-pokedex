import React, { useContext } from "react";
import { PokedexContext } from "services/context/pokedexProviderContext";
import { AppContainer } from "Styles/GlobalLayoutComponents";
import PokedexCard from "components/PokemonCardPokedex";

import Logo from "../../assets/logo.png";

import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useDrawerContext } from "services/context/drawerContext";
import { Box } from "@mui/system";

const Pokedex: React.FC = () => {
  const { pokedex } = useContext(PokedexContext);
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
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
        {pokedex.map((pokemon) => {
          return <PokedexCard name={pokemon.name} key={pokemon.name} />;
        })}
      </AppContainer>
    </>
  );
};

export default Pokedex;

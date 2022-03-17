import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Paper,
  Button,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { useDrawerContext } from "services/context/drawerContext";
import { PokedexContext } from "services/context/pokedexProviderContext";

import PokedexCard from "components/PokemonCardPokedex";

import Logo from "../../assets/logo.png";

const Pokedex: React.FC = () => {
  const { pokedex } = useContext(PokedexContext);
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();
  const navigate = useNavigate();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {pokedex.length == 0 ? (
        <>
          <Box
            component={Paper}
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              margin={5}
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Button
                style={{ marginLeft: "24px" }}
                color="secondary"
                variant="contained"
                startIcon={<ChevronLeftIcon />}
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </Button>
            </Box>
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              margin={5}
            >
              <Typography variant="h2">
                You haven&apos;t captured any pokemon yet.
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
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
              marginBottom={3}
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
            {pokedex.map((pokemon) => {
              return <PokedexCard pokemon={pokemon} key={pokemon.name} />;
            })}
          </Box>
        </>
      )}
    </>
  );
};

export default Pokedex;

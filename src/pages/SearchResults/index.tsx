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

import PokemonCard from "../../components/PokemonCardHome";
import { useDrawerContext } from "services/context/drawerContext";

import Logo from "../../assets/logo.png";

const SearchResults: React.FC = () => {
  const { searchTherm } = useParams();
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
          marginTop={2}
        >
          <img src={Logo} height="75px" />
        </Box>
      </Box>
      <Box
        component={Paper}
        width="50%"
        margin="50px auto"
        display="flex"
        justifyContent="center"
      >
        <Typography variant="h3">Results</Typography>
      </Box>
      <Box
        flexWrap="wrap"
        display="flex"
        maxWidth="1000px"
        margin="0 auto"
        justifyContent="center"
      >
        {searchTherm && <PokemonCard name={searchTherm} key={searchTherm} />}
      </Box>
    </>
  );
};

export default SearchResults;

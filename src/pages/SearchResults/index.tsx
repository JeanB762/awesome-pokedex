import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { useDrawerContext } from "services/context/drawerContext";

import PokemonCard from "../../components/PokemonCardHome";

import Logo from "../../assets/logo.png";

const SearchResults: React.FC = () => {
  const { searchTherm } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
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
        margin="10px auto"
        width="50%"
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
            navigate("/");
          }}
        >
          Back
        </Button>
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
        {searchTherm ? (
          <PokemonCard name={searchTherm} key={searchTherm} />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default SearchResults;

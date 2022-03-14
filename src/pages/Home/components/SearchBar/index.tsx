import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { defaultGrey, secondaryColor } from "utils/colors";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: defaultGrey,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: secondaryColor }}
        placeholder="Search for Pokemons..."
        inputProps={{ "aria-label": "search pokemons" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon sx={{ color: secondaryColor }} />
      </IconButton>
    </Paper>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { queryClient } from "services/hooks/queryClient";

interface Props {
  searchTherm: string;
  setSearchTherm: (therm: string) => void;
}
export default function SearchBar({ setSearchTherm, searchTherm }: Props) {
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        margin: "0 10px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for Pokemons..."
        inputProps={{ "aria-label": "search pokemons" }}
        onChange={(event) => setSearchTherm(event.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={(event) => {
          event.preventDefault();
          navigate(`/pokemonSearch/${searchTherm}`);
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

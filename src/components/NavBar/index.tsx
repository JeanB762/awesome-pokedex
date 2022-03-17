import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import HouseIcon from "@mui/icons-material/House";

import { NavBar, NavItem } from "./style";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { usePokedexThemeContext } from "services/context/themeProviderContext";

export default function NavMenu() {
  const { toggleTheme, themeName } = usePokedexThemeContext();

  function NavMenuLink({ children, to, ...props }: LinkProps) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
      <NavItem className={match ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </NavItem>
    );
  }

  return (
    <NavBar>
      <NavMenuLink to="/">
        <NavItem>
          <HouseIcon />
          Home
        </NavItem>
      </NavMenuLink>
      <NavMenuLink to="/pokedex">
        <NavItem>
          <CatchingPokemonIcon />
          Pokedex
        </NavItem>
      </NavMenuLink>

      <IconButton
        aria-label="delete"
        size="small"
        onClick={toggleTheme}
        color="inherit"
      >
        {themeName == "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </NavBar>
  );
}

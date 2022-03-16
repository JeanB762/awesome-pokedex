import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import HouseIcon from "@mui/icons-material/House";

import { NavBar, NavItem } from "./style";

export default function NavMenu() {
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
    </NavBar>
  );
}

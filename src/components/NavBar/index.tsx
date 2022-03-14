import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

import { CgPokemon } from "react-icons/cg";
import { IoHome } from "react-icons/io5";

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
          <IoHome size={18} />
          Home
        </NavItem>
      </NavMenuLink>
      <NavMenuLink to="/pokedex">
        <NavItem>
          <CgPokemon size={24} />
          Pokedex
        </NavItem>
      </NavMenuLink>
    </NavBar>
  );
}

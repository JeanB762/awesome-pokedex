import React from "react";
import { Link } from "react-router-dom";

import { CgPokemon } from "react-icons/cg";
import { IoHome } from "react-icons/io5";

import { NavBar, NavItem } from "./style";

export default function NavMenu() {
  return (
    <NavBar>
      <Link to="/">
        <NavItem>
          <IoHome size={18} />
          Home
        </NavItem>
      </Link>
      <Link to="/pokedex">
        <NavItem>
          <CgPokemon size={24} />
          Pokedex
        </NavItem>
      </Link>
    </NavBar>
  );
}

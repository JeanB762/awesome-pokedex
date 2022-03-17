import React from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import HouseIcon from "@mui/icons-material/House";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useDrawerContext } from "services/context/drawerContext";
import { usePokedexThemeContext } from "services/context/themeProviderContext";

export const NavMenu: React.FC = ({ children }) => {
  const { toggleTheme, themeName } = usePokedexThemeContext();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  interface ListItemsLinkProps {
    to: string;
    label: string;
    onClick: (() => void) | undefined;
  }

  const ListItemsLink: React.FC<ListItemsLinkProps> = ({
    to,
    label,
    onClick,
    children,
  }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: true });

    const handleClick = () => {
      navigate(to);
      onClick?.();
    };
    return (
      <ListItemButton selected={!!match} onClick={handleClick}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    );
  };

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box width={theme.spacing(24)} flex={1}>
          <List component="nav">
            <ListItemsLink
              to="/"
              label="Home"
              onClick={smDown ? toggleDrawerOpen : undefined}
            >
              <HouseIcon />
            </ListItemsLink>
            <ListItemsLink
              to="/pokedex"
              label="Pokedex"
              onClick={smDown ? toggleDrawerOpen : undefined}
            >
              <CatchingPokemonIcon />
            </ListItemsLink>
          </List>
        </Box>
        <Box>
          <Button
            fullWidth
            color="secondary"
            startIcon={
              themeName == "dark" ? <DarkModeIcon /> : <LightModeIcon />
            }
            onClick={toggleTheme}
          >
            Change Theme
          </Button>
        </Box>
      </Drawer>
      <Box
        height="100%"
        minHeight="100vh"
        marginLeft={smDown ? 0 : theme.spacing(24)}
      >
        {children}
      </Box>
    </>
  );
};

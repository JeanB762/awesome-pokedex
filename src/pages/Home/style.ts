import styled from "styled-components";
import Fab from "@mui/material/Fab";

import { lightColor, secondaryColor, warningColor } from "utils/colors";

export const PokemonCardContainer = styled.div`
  display: flex;
  width: 250px;
  height: 315px;
  background-color: ${secondaryColor};
  border-top: 3px solid ${warningColor};
  border-bottom: 3px solid ${warningColor};
  border-radius: 5px;
  margin: 10px;
`;

export const FloatingButtom = styled(Fab)`
  margin: 0 0 16px 0 !important;
  background-color: ${secondaryColor} !important;
  color: ${lightColor} !important;
  :hover {
    background-color: ${lightColor} !important;
    color: ${secondaryColor} !important;
  }
`;

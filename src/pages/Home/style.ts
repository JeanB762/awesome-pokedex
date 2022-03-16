import styled from "styled-components";

import IconButton from "@mui/material/IconButton";

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

export const CustomButtom = styled(IconButton)`
  margin: 0 0 16px 0 !important;
  background-color: ${secondaryColor} !important;
  color: ${lightColor} !important;
  border: none;
  border-radius: 50px !important;
  margin: 0 25px !important;
  :hover {
    background-color: ${lightColor} !important;
    color: ${secondaryColor} !important;
  }
`;

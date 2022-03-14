import styled from "styled-components";
import Fab from "@mui/material/Fab";

import { lightColor, secondaryColor, warningColor } from "utils/colors";

export const PokemonPrimaryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  word-wrap: break-word;
  background-color: ${secondaryColor};
  border-top: 2px solid ${warningColor};
  border-bottom: 2px solid ${warningColor};
  border-radius: 5px;
  margin: 0 12px 24px 12px;

  p {
    margin-top: 12px;
  }
`;

export const FloatingButtom = styled(Fab)`
  margin: 0 0 24px 0 !important;
  background-color: ${secondaryColor} !important;
  color: ${lightColor} !important;
  :hover {
    background-color: ${lightColor} !important;
    color: ${secondaryColor} !important;
  }
`;

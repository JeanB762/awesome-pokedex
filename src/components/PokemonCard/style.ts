import styled from "styled-components";
import Button, { ButtonProps } from "@mui/material/Button";
import * as colors from "../../utils/colors";

export const PokemonCardContainer = styled.div`
  display: flex;
  width: 250px;
  height: 315px;
  background-color: ${colors.secondaryColor};
  border-top: 3px solid ${colors.warningColor};
  border-bottom: 3px solid ${colors.warningColor};
  border-radius: 5px;
  margin: 10px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 150px;
    width: 150px;
  }
`;

export const ColorButton = styled(Button)`
  margin: 0 0 16px 0 !important;
  background-color: ${colors.secondaryColor} !important;
  color: ${colors.lightColor} !important;
  :hover {
    background-color: ${colors.lightColor} !important;
    color: ${colors.secondaryColor} !important;
  }
`;

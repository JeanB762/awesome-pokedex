import styled from "styled-components";
import {
  infoColor,
  primaryColor,
  secondaryColor,
  warningColor,
} from "utils/colors";

export const PokemonPrimaryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  padding: 24px;
  word-wrap: break-word;
  background-color: ${secondaryColor};
  border-top: 2px solid ${infoColor};
  border-bottom: 2px solid ${warningColor};
  border-radius: 5px;
  margin-bottom: 24px;
  p {
    margin-top: 12px;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 1000px;
  margin: 0 auto;
  padding: 24px;
  justify-content: space-between;
`;

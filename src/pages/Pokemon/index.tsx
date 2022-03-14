import React from "react";
import { useParams } from "react-router-dom";
import { AppContainer } from "Styles/GlobalLayoutComponents";

const Pokemon: React.FC = () => {
  const { pokemonName } = useParams();
  return (
    <AppContainer>
      <h1>{pokemonName}</h1>
    </AppContainer>
  );
};

export default Pokemon;

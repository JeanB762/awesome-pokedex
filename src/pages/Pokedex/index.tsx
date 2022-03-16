import React, { useContext } from "react";
import { PokedexContext } from "providers/pokedexProvider";
import { AppContainer } from "Styles/GlobalLayoutComponents";
import PokedexCard from "components/PokemonCardPokedex";

const Pokedex: React.FC = () => {
  const { pokedex } = useContext(PokedexContext);

  return (
    <>
      <AppContainer>
        <h1>Pokedex</h1>
      </AppContainer>

      <AppContainer>
        {pokedex.map((pokemon) => {
          return <PokedexCard name={pokemon.name} key={pokemon.name} />;
        })}
      </AppContainer>
    </>
  );
};

export default Pokedex;

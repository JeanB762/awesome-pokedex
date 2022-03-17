import { useQuery, UseQueryResult } from "react-query";
import { api } from "../../api";
import { Pokemon } from "../../DTO/pokemonsDTO";

export const getPokemonData = async (name: string): Promise<Pokemon> => {
  const { data } = await api.get<Pokemon>(`/pokemon/${name}`);

  return data;
};

export const usePokemon = (name: string): UseQueryResult<Pokemon, unknown> => {
  return useQuery(["pokemons", name], () => getPokemonData(name), {
    staleTime: 1000 * 60 * 5, // Five Minutes of fresh data
  });
};

import { useQuery, UseQueryResult } from "react-query";
import { api } from "../../api";
import { PokemonResponseByType } from "../../DTO/pokemonsDTO";

export const getPokemonsDataByType = async (
  type: string
): Promise<PokemonResponseByType> => {
  const { data } = await api.get<PokemonResponseByType>(`/type/${type}`);
  return data;
};

export const usePokemonsByType = (
  type: string
): UseQueryResult<PokemonResponseByType, unknown> => {
  return useQuery(["pokemons", type], () => getPokemonsDataByType(type), {
    staleTime: 1000 * 60 * 5, // Five Minutes of fresh data
  });
};

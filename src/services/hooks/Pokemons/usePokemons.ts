import { useQuery, UseQueryResult } from "react-query";

import { api } from "../../api";

interface PokemonResponseData {
  name: string;
  url: string;
}

interface PokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonResponseData[];
}

export const getPokemonsData = async (
  offset: number,
  limit: number
): Promise<PokemonsResponse> => {
  const { data } = await api.get<PokemonsResponse>(
    `/pokemon/?offset=${offset}&limit=${limit}`
  );

  return data;
};

export const usePokemons = (
  offset: number,
  limit: number
): UseQueryResult<PokemonsResponse, unknown> => {
  return useQuery(["pokemons", offset], () => getPokemonsData(offset, limit), {
    staleTime: 1000 * 60 * 5, // Five Minutes of fresh data
  });
};

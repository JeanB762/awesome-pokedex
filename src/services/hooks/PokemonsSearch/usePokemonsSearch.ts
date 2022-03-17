import { useQuery, UseQueryResult } from "react-query";

import { api } from "../../api";
import { PokemonsResponse } from "../../DTO/pokemonsDTO";

export const getPokemonsDataSearch = async (
  searchTherm: string
): Promise<PokemonsResponse> => {
  const { data } = await api.get<PokemonsResponse>(`/pokemon/${searchTherm}`);

  return data;
};

export const usePokemonsSearch = (
  searchTherm: string
): UseQueryResult<PokemonsResponse, unknown> => {
  return useQuery(
    ["pokemonsSearch", searchTherm],
    () => getPokemonsDataSearch(searchTherm),
    {
      staleTime: 1000 * 60 * 5, // Five Minutes of fresh data
    }
  );
};

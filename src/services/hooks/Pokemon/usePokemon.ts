import { useState, useEffect } from "react";
import { api } from "../../api";

export function usePokemon<Pokemon>(name: string) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState<unknown>(null);

  async function getData(name: string) {
    try {
      const response = await api.get(`/pokemon/${name}`);
      setPokemon(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsFetching(false);
    }
  }
  useEffect(() => {
    getData(name);
  }, []);

  return { pokemon, isFetching, isError };
}

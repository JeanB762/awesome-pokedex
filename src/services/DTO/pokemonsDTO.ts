export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonTypes {
  name: string;
  url: string;
}

export interface PokemonTypesResponse {
  type: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: Sprites;
  types: PokemonTypesResponse[];
  stats: Stat[];
  abilities: Ability[];
}

export interface PokemonResponseData {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonResponseData[];
}

export interface PokemonByTypes {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface PokemonResponseByType {
  name: string;
  pokemon: PokemonByTypes[];
}

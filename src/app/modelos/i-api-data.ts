export interface IApiItem {
  name: string;
  url: string;
}

export interface IPokemonData {
  id: number;
  name: string;
  abilities: { ability: IApiItem }[];
  types: { type: IApiItem }[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': { front_default: string };
    };
  };
}

export interface ISpeciesData {
  generation: IApiItem;
}
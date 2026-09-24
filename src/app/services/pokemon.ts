import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { IPokemon } from '../modelos/i-pokemon';
import { IPokemonData, ISpeciesData } from '../modelos/i-api-data';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2';

  getOnePokemon(id: number): Observable<IPokemon> {
    return forkJoin({
      pokemon: this.http.get<IPokemonData>(`${this.apiUrl}/pokemon/${id}`),
      species: this.http.get<ISpeciesData>(`${this.apiUrl}/pokemon-species/${id}`)
    }).pipe(
      map(({ pokemon, species }) => ({
        id: pokemon.id,
        name: pokemon.name,
        generation: species.generation.name.replace('generation-', '').toUpperCase(),
        abilities: pokemon.abilities.map(item => item.ability.name),
        types: pokemon.types.map(item => item.type.name),
        image: pokemon.sprites.other['official-artwork'].front_default ?? pokemon.sprites.front_default
      }))
    );
  }

  getPokemonList(amount: number): Observable<IPokemon[]> {
    const pokemonCalls = Array.from({ length: amount }, (_, index) => this.getOnePokemon(index + 1));
    return forkJoin(pokemonCalls);
  }
}
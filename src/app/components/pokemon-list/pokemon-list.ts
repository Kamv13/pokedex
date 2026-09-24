import { Component, OnInit, inject, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { IPokemon } from '../../modelos/i-pokemon';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { LoadingMessage } from '../loading-message/loading-message';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard, LoadingMessage],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList implements OnInit {
  private pokemonService = inject(PokemonService);
  pokemons = signal<IPokemon[]>([]);
  loading = signal(true);

  ngOnInit(): void {
    this.pokemonService.getPokemonList(200).subscribe(data => {
      this.pokemons.set(data);
      this.loading.set(false);
    });
  }
}
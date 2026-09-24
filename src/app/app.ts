import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { PokemonList } from './components/pokemon-list/pokemon-list';

@Component({
  selector: 'app-root',
  imports: [Header, PokemonList],
  template: `
    <app-header />
    <app-pokemon-list />
  `
})
export class App {}
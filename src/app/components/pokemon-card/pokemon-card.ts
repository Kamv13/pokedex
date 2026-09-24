import { Component, computed, input } from '@angular/core';
import { IPokemon } from '../../modelos/i-pokemon';
import { TypeBadge } from '../type-badge/type-badge';
import { getTypeColor } from '../../utils/type-colors';

@Component({
  selector: 'app-pokemon-card',
  imports: [TypeBadge],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  pokemon = input.required<IPokemon>();
  idText = computed(() => '#' + this.pokemon().id.toString().padStart(3, '0'));
  cardColor = computed(() => getTypeColor(this.pokemon().types[0]));
}
import { Component, computed, input } from '@angular/core';
import { getTypeColor } from '../../utils/type-colors';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.html',
  styleUrl: './type-badge.css'
})
export class TypeBadge {
  type = input.required<string>();
  color = computed(() => getTypeColor(this.type()));
}
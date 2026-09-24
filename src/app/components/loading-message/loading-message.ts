import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-message',
  template: `<p class="message">Loading Pokémon...</p>`,
  styles: `.message { text-align: center; font-size: 18px; color: #666; }`
})
export class LoadingMessage {}
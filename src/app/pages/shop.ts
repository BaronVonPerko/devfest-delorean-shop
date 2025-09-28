import {Component, inject} from '@angular/core';
import {AppStore} from '../state/store';
import {ItemCard} from '../components/item-card';

@Component({
  selector: 'app-shop',
  imports: [
    ItemCard
  ],
  host: {
    class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-9/10 m-auto'
  },
  template: `
    @for (item of store.entities(); track $index) {
      <app-item-card [item]="item" />
    }
  `,
  styles: ``
})
export class Shop {
  store = inject(AppStore);
}

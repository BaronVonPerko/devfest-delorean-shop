import {Component, inject} from '@angular/core';
import {AppStore} from '../state/store';
import {ItemCard} from '../components/cart-item-card';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    ItemCard,
    CurrencyPipe
  ],
  host: {
    class: 'block max-w-9/10 m-auto'
  },
  template: `
    @for (item of store.itemsInCart(); track $index) {
        <app-cart-item-card [item]="item" />
    }

    @if (!store.cartIsEmpty()) {
      <div class="divider">CART SUMMARY</div>
      <div class="card w-96 bg-base-100 card-lg shadow-sm">
        <div class="card-body">
          <h2 class="card-title">Total</h2>
          <p>{{store.cartPrice() | currency: 'CR '}}</p>
          <div class="justify-end card-actions">
            <button class="btn btn-primary">Check Out</button>
          </div>
        </div>
      </div>
    } @else {
      <p class="text-center pt-48">Your cart is empty.</p>
    }
  `,
  styles: ``
})
export class Cart {
  store = inject(AppStore);
}

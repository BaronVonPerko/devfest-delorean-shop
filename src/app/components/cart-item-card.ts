import {Component, computed, inject, input} from '@angular/core';
import {ShopItem} from '../models/item';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {AppStore} from '../state/store';

@Component({
  selector: 'app-cart-item-card',
  imports: [NgOptimizedImage, CurrencyPipe],
  template: `
    <div class="card card-side bg-primary-content/80 shadow-lg max-w-md my-4">
      <figure>
        <img
          [ngSrc]="item().image"
          width="50"
          height="50"
          [alt]="item().alt" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{item().name}}</h2>
        <p>{{item().price | currency: 'CR '}}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" (click)="store.removeFromCart(item())">Remove</button>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ItemCard {
  store = inject(AppStore);
  item = input.required<ShopItem>();
  isInCart = computed(() => this.item().inCart);
}

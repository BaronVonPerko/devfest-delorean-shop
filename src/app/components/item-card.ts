import {Component, computed, inject, input} from '@angular/core';
import {ShopItem} from '../models/item';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {AppStore} from '../state/store';

@Component({
  selector: 'app-item-card',
  imports: [NgOptimizedImage, CurrencyPipe],
  template: `
    <div class="card bg-primary-content/80 shadow-sm">
      <figure>
        <img
          [ngSrc]="item().image"
          width="400"
          height="400"
          [alt]="item().alt" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{item().name}}
          @if (item().isNew) {
            <div class="badge badge-secondary">NEW</div>
          }
        </h2>
        <p>{{item().description}}</p>
        <p class="text-accent text-lg">{{item().price | currency: 'CR '}}</p>
        <div class="card-actions justify-end">
          @if (!isInCart()) {
            <button class="btn btn-primary" (click)="store.addToCart(item())">Buy Now</button>
          } @else {
            <button class="btn btn-secondary" (click)="store.removeFromCart(item())">Remove From Cart</button>
          }
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

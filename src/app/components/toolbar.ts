import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AppStore} from '../state/store';

@Component({
  selector: 'app-toolbar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  template: `
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">DeLorean Upgrade Shop</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a routerLink="/" routerLinkActive="link-accent" [routerLinkActiveOptions]="{exact: true}">Shop</a></li>
          <li class="flex-row items-center">
            <a routerLink="/cart" routerLinkActive="link-accent">Cart</a>
            @if (store.numberOfItemsInCart() > 0) {
              <span class="badge badge-accent">{{store.numberOfItemsInCart()}}</span>
            }
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``
})
export class Toolbar {
  store = inject(AppStore);
}

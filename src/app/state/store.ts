import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {computed, inject} from '@angular/core';
import {ApiService} from '../services/api';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap} from 'rxjs';
import {tapResponse} from '@ngrx/operators';
import {ShopItem} from '../models/item';
import {addEntities, updateEntity, withEntities} from '@ngrx/signals/entities';

type LoadingStatus = 'loading' | 'error' | 'success';

type AppState = {
  loading: LoadingStatus;
}

const initialState: AppState = {
  loading: 'loading',
}

export const AppStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withEntities<ShopItem>(),

  withComputed(({entities}) => ({
    itemsInCart: computed(() => entities().filter(item => item.inCart)),
  })),

  withComputed(({itemsInCart}) => ({
    numberOfItemsInCart: computed(() => itemsInCart().length),
    cartPrice: computed(() => itemsInCart().reduce((acc, curr) => acc + curr.price, 0))
  })),

  withComputed(({numberOfItemsInCart}) => ({
    cartIsEmpty: computed(() => numberOfItemsInCart() === 0)
  })),

  withMethods((store, api = inject(ApiService)) => ({
    addToCart(itemToAdd: ShopItem) {
      patchState(
        store,
        updateEntity({id: itemToAdd.id, changes: {inCart: true}}),
      )
    },

    removeFromCart(itemToRemove: ShopItem) {
      patchState(
        store,
        updateEntity({id: itemToRemove.id, changes: {inCart: false}}),
      )
    },

    loadStoreData: rxMethod<void>(
      pipe(
        switchMap(() => api.getShopItems().pipe(
          tapResponse({
            next: items => patchState(store, addEntities(items), {loading: 'success'}),
            error: () => patchState(store, {loading: 'error'})
          })
        )),
      )
    )
  })),

  withHooks(({loadStoreData}) => ({
    onInit() {
      loadStoreData()
    }
  }))
)

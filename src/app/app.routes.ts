import { Routes } from '@angular/router';
import {Shop} from './pages/shop';
import {Cart} from './pages/cart';

export const routes: Routes = [
  {path: '', component: Shop},
  {path: 'cart', component: Cart},
  {path: '**', redirectTo: ''}
];

import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', redirectTo: ''},
  { path: 'cart', component: CartComponent},
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },
];

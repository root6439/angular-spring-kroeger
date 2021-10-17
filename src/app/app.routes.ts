import { CartComponent } from './modules/shop/cart/cart.component';
import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', redirectTo: '' },
  { path: 'cart', component: CartComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then(
        (module) => module.ProductModule
      ),
  },
  { path: '**', redirectTo: '' },
];

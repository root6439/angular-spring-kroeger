import { ShopsComponent } from './shops/shops.component';
import { ItemsComponent } from './items/items.component';
import { Routes } from '@angular/router';

import { ItemsResolverService } from './items-resolver.service';

export const ROUTES: Routes = [
  {
    path: 'items',
    component: ItemsComponent,
    resolve: { products: ItemsResolverService },
  },
  { path: 'shops', component: ShopsComponent },
];

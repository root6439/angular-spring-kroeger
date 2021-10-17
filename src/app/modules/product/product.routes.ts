import { Routes } from '@angular/router';
import { ProductRegistryComponent } from './product-registry/product-registry.component';
import { ProductSelectorComponent } from './product-selector/product-selector.component';

export const routes: Routes = [
  { path: 'select/:id', component: ProductSelectorComponent },
  { path: 'add', component: ProductRegistryComponent },
];

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegistryComponent } from './product-registry/product-registry.component';
import { ProductSelectorComponent } from './product-selector/product-selector.component';
import { routes } from './product.routes';

@NgModule({
  declarations: [ProductRegistryComponent, ProductSelectorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {}

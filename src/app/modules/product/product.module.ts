import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegistryComponent } from './product-registry/product-registry.component';
import { ProductSelectorComponent } from './product-selector/product-selector.component';



@NgModule({
  declarations: [
    ProductRegistryComponent,
    ProductSelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }

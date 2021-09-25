import { ProductsService } from './../../components/services/products/products.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemsResolverService implements Resolve<any> {
  constructor(private productService: ProductsService) {}

  resolve() {
    return this.productService.getProducts();
  }
}

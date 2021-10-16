import { CartService } from '../modules/shop/cart/cart.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/Products.model';
import { ProductService } from '../modules/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Observable<IProduct[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addItem(product: IProduct) {
    this.cartService.shop.products.push({
      product: product,
      quantity: 1,
    });
  }
}

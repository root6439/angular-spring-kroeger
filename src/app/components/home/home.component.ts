import { CartService } from './../services/cart/cart.service';
import { ProductsService } from './../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/Products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Observable<IProduct[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addItem(product: IProduct) {
    this.cartService.shop.products.push({
      product: product,
      quantity: 1,
    });
  }
}

import { IProduct } from './../../../shared/models/Products.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.css'],
})
export class ProductSelectorComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productService
        .getProduct(+params['id'])
        .subscribe((product: IProduct) => {
          this.product = product;
          console.log(product);
        });
    });
  }
}

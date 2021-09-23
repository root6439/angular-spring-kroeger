import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-form-shop',
  templateUrl: './card-form-shop.component.html',
  styleUrls: ['./card-form-shop.component.css'],
})
export class CardFormShopComponent {
  @Input()
  title: string;

  @Input()
  description: string;

  // @Input()
  // img: string;

  @Input()
  price: number;

  @Input()
  quantity: number;
}

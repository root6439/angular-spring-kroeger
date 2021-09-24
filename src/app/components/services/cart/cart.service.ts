import { IShop } from './../../../shared/models/Shop.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  shop: IShop;
}

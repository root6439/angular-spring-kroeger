import { Shop_Product } from './Shop_Products.model';
import { IUser } from './User.model';

export interface IShop {
  id?: number;
  user: IUser;
  products: Shop_Product[];
  date: Date;
}

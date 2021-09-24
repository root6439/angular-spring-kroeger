import { IProduct } from "./Products.model";

export interface Shop_Product {
  id?: number;
  product: IProduct,
  quantity: number;
}

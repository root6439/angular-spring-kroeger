import { retry } from 'rxjs/internal/operators/retry';
import { URL_API } from './../../shared/url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/Products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${URL_API}/products`).pipe(retry(3));
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http
      .get<IProduct>(`${URL_API}/products?id=${id}`)
      .pipe(retry(3));
  }
}

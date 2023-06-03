import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct,IGetProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }
  getProduct(_id: any): Observable<IGetProduct> {
    return this.http.get<IGetProduct>('http://127.0.0.1:8088/api/products/' + _id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct,IGetProduct } from '../interfaces/product';
const apiUrl = 'http://127.0.0.1:8088/api/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(apiUrl);
  }
  getProduct(_id: any): Observable<IGetProduct> {
    return this.http.get<IGetProduct>(apiUrl + _id);
  }
  deleteProduct(_id:string):Observable<IProduct>{
    return this.http.delete<IProduct>(`${apiUrl}`+_id)
  }
  updateProduct(product:IProduct):Observable<IProduct>{
    return this.http.patch<IProduct>(`${apiUrl}${product._id}`,product)
  }
}

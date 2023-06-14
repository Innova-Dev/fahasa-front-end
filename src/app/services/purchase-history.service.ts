import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseHistory } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {
  private apiUrl = 'http://127.0.0.1:8088/api/purchase';
  constructor(private http: HttpClient) { }
  
  getPurchaseHistory(): Observable<PurchaseHistory[]> {
    return this.http.get<PurchaseHistory[]>(this.apiUrl);
  }
}

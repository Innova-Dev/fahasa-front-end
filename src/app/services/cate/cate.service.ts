import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICate } from 'src/app/interfaces/cate';


const apiUrl = 'http://127.0.0.1:8088/api/categories/'
@Injectable({
  providedIn: 'root'
})
export class CateService {

  constructor(private http: HttpClient) { }
  
  getCates(): Observable<ICate[]> {
    return this.http.get<ICate[]>(apiUrl);
  }
  getCate(_id: any): Observable<ICate> {
    return this.http.get<ICate>(apiUrl + _id)
  }
  deleteCate(_id: any): Observable<ICate> {
    return this.http.delete<ICate>(apiUrl +_id)
  }
  addCate(categories: ICate): Observable<ICate> {
    return this.http.post<ICate>(apiUrl, categories);
  }
  updateCate(categories:ICate): Observable<ICate>{
    return this.http.put<ICate>(`http://127.0.0.1:8088/api/categories/${categories._id}`, categories)
  }
}

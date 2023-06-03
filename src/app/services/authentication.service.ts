import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  userSignUp(data: IUser): Observable<any>{
    return this.http.post<any>(environment.SERVER_URL + '/auth/signup', data)
  } 
  userSignIn(data: IUser): Observable<any>{
    return this.http.post<any>(environment.SERVER_URL + '/auth/signin', data)
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthApiClient {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    let url = this.baseUrl + '/login'
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<User>(url, params, httpOptions);
  }

  logout(): Observable<any> {
    let url = this.baseUrl + '/logout';
    return this.http.post<any>(url, '', httpOptions);
  }

  register(username: string, password: string): Observable<any> {
    let url = this.baseUrl + '/register'
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<User>(url, params, httpOptions);
  }
}
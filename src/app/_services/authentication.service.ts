import { Injectable } from '@angular/core';
import { AuthApiClient } from './auth.api.client';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authApiClient: AuthApiClient) { }

  login(username: string, password: string): Observable<any> {
    return this.authApiClient.login(username, password)
      .pipe(map(data => {
        localStorage.setItem('currentUser', username);
        return data;
      }));
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  logout(): Observable<any> {
    return this.authApiClient.logout()
      .pipe(map(data => {
        localStorage.removeItem('currentUser');
        return data;
      }));
  }
}

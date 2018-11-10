import { Injectable } from '@angular/core';
import { AuthApiClient } from './auth.api.client';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authApiClient: AuthApiClient) { }

  login(username: string, password: string): Observable<User> {
    return this.authApiClient.login(username, password)
      .pipe(map(user => {
        localStorage.setItem('isAdmin', new String(user.isAdmin).toString());
        localStorage.setItem('currentUser', username);
        return user;
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
        localStorage.removeItem('isAdmin');
        return data;
      }));
  }

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }
}

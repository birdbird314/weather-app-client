import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdminApiClient {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  removeCity(cityId): Observable<any> {
    let url = this.baseUrl + '/admin/city/remove/' + cityId;
    return this.http.post<any>(url, '', httpOptions);
  }
}
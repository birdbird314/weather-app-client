import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../_models/city';
import { Weather } from '../_models/weather';

const httpOptions = {
    withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class WeatherApiClient {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  allCities(): Observable<City[]> {
    let url = this.baseUrl + '/city/all'
    return this.http.get<City[]>(url, httpOptions); 
  }

  getWeather(city: City): Observable<Weather> {
    let url = this.baseUrl + '/weather?cityId=' + city.id;
    return this.http.get<Weather>(url, httpOptions); 
  }
}
import { Component, OnInit } from '@angular/core';
import { City } from '../_models/city';
import { WeatherApiClient } from '../_services/weather.api.client';
import { Weather } from '../_models/weather';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: City[];
  city: City;
  weather: Weather;
  fetchFailed: boolean;
  isAdmin: boolean;

  constructor(
    private weatherApiClient: WeatherApiClient,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getCities();
    this.isAdmin = this.authService.isAdmin();
  }

  getCities(): void {
    this.weatherApiClient.allCities().subscribe(cities => this.cities = cities);
  }

  setCity(city: City): void {
    this.getWeather(city)
  }

  refreshWeather(): void {
    this.getWeather(this.city);
  }

  getWeather(city: City) {
    this.weatherApiClient.getWeather(city).subscribe(
      weather => {
        this.fetchFailed = false;
        this.weather = weather
        this.city = city;
      },
      error => {
        this.city = city;
        this.fetchFailed = true;
      }
    );
  }
}

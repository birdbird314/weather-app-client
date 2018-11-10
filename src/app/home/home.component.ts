import { Component, OnInit } from '@angular/core';
import { City } from '../_models/city';
import { WeatherApiClient } from '../_services/weather.api.client';
import { Weather } from '../_models/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: City[];
  city: City;
  weather: Weather;
  user: string;

  constructor(private weatherApiClient: WeatherApiClient) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.weatherApiClient.allCities().subscribe(cities => this.cities = cities);
  }

  setCity(city: City): void {
    this.city = city;
    this.getWeather();
  }

  getWeather() {
    this.weatherApiClient.getWeather(this.city).subscribe(weather => this.weather = weather);
  }
}

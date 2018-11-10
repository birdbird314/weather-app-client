import { Component, OnInit } from '@angular/core';
import { City } from '../_models/city';
import { WeatherApiClient } from '../_services/weather.api.client';
import { AuthenticationService } from '../_services/authentication.service';
import { AdminApiClient } from '../_services/admin.api.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cities: City[];
  adding: boolean;

  constructor(
    private weatherApiClient: WeatherApiClient,
    private adminApiClient: AdminApiClient
  ) { }

  ngOnInit() {
    this.getCities();
    this.adding = false;
  }

  getCities(): void {
    this.weatherApiClient.allCities().subscribe(cities => this.cities = cities);
  }

  startAdding(): void {
    this.adding = true;
  }

  stopAdding(): void {
    this.adding = false;
  }

  remove(city: City) {
    this.adminApiClient.removeCity(city.id).subscribe(_ => {
      this.cities = this.cities.filter(c => c != city)
    });
  }
}

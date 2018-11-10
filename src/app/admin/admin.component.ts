import { Component, OnInit } from '@angular/core';
import { City } from '../_models/city';
import { WeatherApiClient } from '../_services/weather.api.client';
import { AuthenticationService } from '../_services/authentication.service';
import { AdminApiClient } from '../_services/admin.api.client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addCityForm: FormGroup;
  cities: City[];
  adding: boolean;

  constructor(
    private weatherApiClient: WeatherApiClient,
    private adminApiClient: AdminApiClient,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getCities();
    this.adding = false;
    this.addCityForm = this.formBuilder.group({
      name: ['', Validators.required],
      countryCode: ['', Validators.required]
    });
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

  get form() { return this.addCityForm.controls; }

  add() {
    if (this.addCityForm.invalid) {
      return;
    } 
    this.adminApiClient.addCity(this.form.name.value, this.form.countryCode.value).subscribe(_ => {
      this.stopAdding();
      this.clearForm();
      this.getCities();
    })
  }

  private clearForm() {
    this.form.name.value = '';
    this.form.countryCode.value = '';
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdminApiClient } from '../_services/admin.api.client';

@Component({
  selector: 'app-weather-providers-admin',
  templateUrl: './weather-providers-admin.component.html',
  styleUrls: ['./weather-providers-admin.component.css']
})
export class WeatherProvidersAdminComponent implements OnInit {
  providerForm: FormGroup;
  currentProvider: string;
  providers: string[];

  constructor(
    private formBuilder: FormBuilder,
    private adminApiClient: AdminApiClient
  ) { }

  ngOnInit() {
    this.getCurrentProvider();
    this.getProviders();
    this.providerForm = this.formBuilder.group({
        provider: ['', Validators.required]
    });
  }

  getCurrentProvider(): void {
    this.adminApiClient.getCurrentWeatherProvider()
      .subscribe(provider => this.currentProvider = provider);
  }

  getProviders(): void {
    this.providers = ['Yahoo', 'OpenWeatherMap', 'Baca'];
  }

  get form() { return this.providerForm.controls; }

  changeProvider(): void {
  }
}

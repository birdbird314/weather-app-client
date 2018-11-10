import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getCurrentProvider();
    this.getProviders();
    this.providerForm = this.formBuilder.group({
        provider: ['', Validators.required]
    });
  }

  getCurrentProvider(): void {
    this.currentProvider = 'Baca';
  }

  getProviders(): void {
    this.providers = ['Yahoo', 'OpenWeatherMap', 'Baca'];
  }

  get form() { return this.providerForm.controls; }

  changeProvider(): void {
  }
}

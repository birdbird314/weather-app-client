import { Component, OnInit } from '@angular/core';
import { City } from '../_models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: City[];
  city: City;

  constructor() { }

  ngOnInit() {
    this.cities = [{countryCode: 'PL', id: 1, name: 'Warsaw'}, {countryCode: 'PL', id: 2, name: 'Cracow'}];
    this.city = this.cities[0];
  }

  setCity(city: City) {
    this.city = city;
  }
}

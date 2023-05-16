import { Injectable } from '@angular/core';
import { City } from './City';
import { CityList } from './CityList';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentCity= DEFAULT_CITY
  city$ : BehaviorSubject<City> = new BehaviorSubject<City>(DEFAULT_CITY);
  constructor() { }

  setCity(city: City){
    //this.currentCity = city;
    this.city$.next(city);
  }
  
}

let cityList = new CityList();
let DEFAULT_CITY = {id:1, name:'Київ'};

import { Injectable } from '@angular/core';
import {AngularFireList, AngularFireDatabase, AngularFireObject} from '@angular/fire/compat/database';
import { City } from './City';
import { Country } from './Country';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  countryListRef?: AngularFireList<any>;
  cityListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  createCountry(country: Country) {
    return this.countryListRef!.push({
      name: country.name,
      city_id: country.city_id,
      capital: country.capital
    });
  }
  createCity(city: City) {
    return this.cityListRef!.push({
      id: city.id,
      name: city.name
    });
  }
  getOne(id: string, db : string)  {
    this.bdRef = this.db.object('/' + db+ '/' + id);
    console.log("bdRef=" + this.bdRef.snapshotChanges())
    return this.bdRef
  }
  // true - country, false - city
  getAll(db : string,  type : boolean)  {
    if(type) {
      this.countryListRef = this.db.list('/' + db);
      return this.countryListRef;
    }else{
      this.cityListRef = this.db.list('/' + db);
      return this.cityListRef;
    }
  }
  updateCountry(id: string, country: Country, db : string) {
    this.bdRef = this.db.object('/' + db + '/' + id);
    return this.bdRef.update({
      name: country.name,
      city_id: country.city_id,
      capital: country.capital})
  }
  updateCity(id: string, city: City, db : string) {
    this.bdRef = this.db.object('/' + db + '/' + id);
    return this.bdRef.update({
      id: city.id,
      name: city.name})
    }
  deleteRecord(id: string, db : string) {
    this.bdRef = this.db.object('/' + db + '/' + id);
    return this.bdRef.remove();
  }
}


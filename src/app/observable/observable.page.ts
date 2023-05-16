import { Component, OnInit } from '@angular/core';
import { CityList } from './service/CityList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { CountryList } from './service/CountryList';
import { City } from './service/City';
import { Country } from './service/Country';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.page.html',
  styleUrls: ['./observable.page.scss'],
})
export class ObservablePage implements OnInit {
  cities = new CityList()
  private configService = new ConfigService()
  private subscriptions: Subscription[] = []
  countryList = new CountryList(this.configService)
  city:City = new City()
  count=0
  bdCountry ='Country'
  bdCity = 'City'
  constructor( public fbservice : FirebaseService) { }

  ngOnInit() {
    this.fetchTask(this.bdCountry, true)
    let taskRes = this.fbservice.getAll(this.bdCountry, true)
    taskRes.snapshotChanges().subscribe()
    this.fetchTask(this.bdCity, false)
    let taskRes1 = this.fbservice.getAll(this.bdCity, false)
    taskRes1.snapshotChanges().subscribe()
    const citySub = this.configService.city$.subscribe(() => {
      this.city = this.configService.city$.value
    })
    this.subscriptions.push(citySub)
  }
  fetchTask(bd:any, flag:any){
    this.fbservice.getAll(bd, flag).valueChanges().subscribe(res => {
      console.log(res)
      if (flag){ this.countryList.countryList = res}
      else{
        this.cities.city = res
        this.city = this.cities.city[this.count]
        this.countryList.search(this.city.id)
      }
    })
  }
  nextCity(){
    if (this.count<this.cities.city.length -1){
      this.count++
    }
    else{
      this.count=0
    }
    this.configService.setCity(this.cities.city[this.count])
  }
  addCountry(name:any, capital:any){
    if (!(typeof name == 'string' && typeof capital == 'string')){
      throw new Error('Invalid Country name or capital type')
    }
    let country = new Country()
    country.name = name
    country.capital = capital
    country.city_id = this.city.id
    this.fbservice.createCountry(country)
    this.countryList.search(this.city.id)
    this.countryList.add(country)
  
  }
  addCity(city:any){
    if (!(typeof city == 'string')){
      throw new Error('Invalid City type')
    }
    let c = new City()
    c.name = city
    c.id = this.cities.city.length + 1
    //this.cities.add(c)
    this.fbservice.createCity(c) 
    
    }
  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

}



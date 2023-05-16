import { ConfigService } from "./config.service";
import { Country } from "./Country";

export class CountryList{
    countryList = new Array()
    searchCountry = new Array()
    citySub = this.configService.city$.subscribe(
        () => {
            let city = this.configService.city$.value
            this.search(city.id)
        })
    constructor(private configService: ConfigService){
    }
    add(country: Country){
        if(this.countryList.find(c => c.city_id == country.city_id))
            return
        this.countryList.push(country)
        this.search(country.city_id)
    }
    search(id: number){
        this.searchCountry = this.countryList.filter(country => country.city_id == id)
            
    }
}
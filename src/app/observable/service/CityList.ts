import { City } from "./City";

export class CityList{
    city = new Array()//new Map()
    constructor(){
        //this.city.set(0,{id:0, name:"Київ"})
       // this.city.set(1,{id:1, name:"Нью-Йорк"})
    }
    add(city: City){
        //this.city.set(city.id,{id:city.id, name:city.name})    
        this.city.push(city)
    
    }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorDateService {
  founded_year : number = 1986
  validate_date(date: string): boolean {
    let date_array = date.split(/[-./]/);
    //Date objects` months start at 0.
    let date_obj : number[] = []
    date_array.forEach(element => { date_obj.push(parseInt(element)) });
    date_obj[1]--;
    let current_date = new Date();
    // create new Date
    let date_test =new Date(date_obj[2], date_obj[1], date_obj[0]);
    if  ((date_test.getFullYear() == date_obj[2]) 
    && (date_test.getMonth() == date_obj[1]) 
    && (date_test.getDate() == date_obj[0])
    && (date_obj[2] > this.founded_year)
    &&(date_obj[2] <= current_date.getFullYear())
    &&(date_obj[1] <= 12)
    ){
      return true;
    }
    else{
      return false;
    }
  }

  constructor() { }
}

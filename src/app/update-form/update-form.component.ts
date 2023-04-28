import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import Newspaper from '../my-form/class/Newspaper';
import { ValidatorDateService } from '../my-form/service/validator-date.service';
import { ValidatorPositiveNumberService } from '../my-form/service/validator-positive-number.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss'],
})
export class UpdateFormComponent  implements OnInit {
  @Input() newspaper! : Newspaper
  @Input() show : boolean = false
  @Output() changeNewspaper : EventEmitter<Newspaper> = new EventEmitter<Newspaper>()
  @Output() changeShow= new EventEmitter()

  ngOnInit(){}
  constructor() { }
  saveChange(name:any, number : any, pub_date: any, page_num:any){
    this.show = false
    let validator_number = new ValidatorPositiveNumberService()
    let validator_date = new ValidatorDateService()
    if(validator_number.validate_positive_number(number) && validator_number.validate_positive_number(page_num)){
      if ( validator_date.validate_date(pub_date)){
        this.newspaper = new Newspaper(name,number,pub_date,page_num, this.newspaper.list_of_articles)
        this.changeNewspaper.emit(this.newspaper)
        this.changeShow.emit(this.show)
      }
    }else{ throw new Error("В полях присутні від'ємні числа")}

  }  
}
import { Component, OnInit, Output } from '@angular/core';
import Newspaper from '../my-form/class/Newspaper';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {
  show_update : boolean = false
  newspapers : Newspaper[] = [];

  constructor() { }
  ngOnInit() {}
  add_newspaper(event : any){
    if (event as Newspaper){
      this.newspapers.push(event as Newspaper)
    }
    else{
      throw new Error("Event is not a Newspaper type")
    }
  }
  check_length(it: Newspaper){
    if  (it.list_of_articles.length > 0){
      return true}
    else return false
  }
  update(){
    this.show_update = true
  }
  isBooleanEvent(event : any){
    if (typeof event == "boolean"){
      this.show_update = event
    }else throw new Error("Event is not a boolean type")
  }
  isNewspaperEvent(event : any, i: number){
    if (event as Newspaper){
      this.newspapers[i] = event as Newspaper
    }else throw new Error("Event is not a Newspaper type")
  }
  
  

}

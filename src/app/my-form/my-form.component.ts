import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormArray,FormBuilder, Validators } from '@angular/forms';
import Newspaper from './class/Newspaper';
import { dateValidator } from './service/dateValidator';
import { AlertController, ToastController } from '@ionic/angular';
import { posNumberValidator } from './service/posNumberValidator';



@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent  implements OnInit {
  newspaper! : Newspaper
  @Output() addNewspaper: EventEmitter<Newspaper> = new EventEmitter<Newspaper>();
  form_newspaper! : FormGroup
  //date_regex = '^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$';
  constructor(private fb : FormBuilder, private alertController : AlertController, private toastController: ToastController) {
    this.form_newspaper = this.fb.group({
      name:['',[Validators.required]],
      number:['',[posNumberValidator()]],
      pub_date:['',[dateValidator()]],
      page_num:['',[posNumberValidator()]],
      articles: this.fb.array([])
    })
   }

  ngOnInit() {   
  }
  addArticle(){
    console.log('Add');
    const articles = this.form_newspaper.get('articles');
    if (articles) {
      (articles as FormArray).push(new FormControl());
    }
  }
  deleteArticle(index : number){
    console.log('Delete');
    const articles = this.form_newspaper.get('articles');
    if (articles) {
      (articles as FormArray).removeAt(index);
    }
  }
  getControls(){
    const articles = this.form_newspaper.get('articles');
    if (articles) {
      return (articles as FormArray).controls;
    }
    return [];
  }
  get articles(){
    return this.form_newspaper.get('articles') as FormArray;
  }
  onSubmit(){
    let msg : string = ''
    if(!this.form_newspaper.valid){
      if(this.form_newspaper.controls['pub_date'].invalid){
        msg = 'Помилка дати публікації'
      }
      else if(this.form_newspaper.controls['number'].invalid){
        msg = 'Помилка номеру'
      }
      else{
        msg = 'Не всі поля заповнені'
      }
      this.presentAlert(msg)
    }
    else{
      this.newspaper = new Newspaper(this.form_newspaper.value.name,this.form_newspaper.value.number,this.form_newspaper.value.pub_date,this.form_newspaper.value.page_num,this.form_newspaper.value.articles)
      console.log(this.newspaper)
      this.presentToast()
      console.log(this.form_newspaper.controls['articles'].value)
      console.log(this.newspaper.list_of_articles)
      this.addNewspaper.emit(this.newspaper)
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: "Створено газету з назвною " + this.newspaper.name + " номером -" + this.newspaper.number + " датою - " + this.newspaper.publication_date + " кількістю сторінок -" + this.newspaper.number_of_pages + " кількістю статей - " + this.newspaper.list_of_articles.length,
      duration: 5000,
      position: 'bottom',
      buttons: ['OK']
    });

    await toast.present();
  }

}

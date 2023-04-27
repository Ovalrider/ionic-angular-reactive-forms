import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from "./my-form.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MyFormComponent],
    imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
    exports: [MyFormComponent],
})
export class MyFormModule{}
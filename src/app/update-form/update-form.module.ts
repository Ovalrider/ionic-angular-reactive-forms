import { IonicModule } from '@ionic/angular';
import { MyFormModule } from '../my-form/my-form.module';
import { UpdateFormComponent } from './update-form.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [UpdateFormComponent],
    imports: [IonicModule, CommonModule, MyFormModule],
    exports: [UpdateFormComponent]
})


export class UpdateFormModule {}
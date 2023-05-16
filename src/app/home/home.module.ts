import { MyFormModule } from './../my-form/my-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ViewFormModule } from '../viewform/viewform.module';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { UpdateFormModule } from '../update-form/update-form.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ViewFormModule,
    UpdateFormModule,
    HeaderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

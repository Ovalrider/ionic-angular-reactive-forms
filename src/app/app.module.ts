import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyFormModule } from './my-form/my-form.module';
import { ViewFormModule } from './viewform/viewform.module';
import { HeaderModule } from './header/header.module';
import {AngularFireModule} from '@angular/fire/compat';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MyFormModule, ViewFormModule,HeaderModule, AngularFireModule.initializeApp(environment.firebase)],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

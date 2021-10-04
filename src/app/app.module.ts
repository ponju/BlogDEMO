import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FragmentModule } from './fragment/fragment.module';

//Fontawesome
import "@fortawesome/fontawesome-free/js/fontawesome.js"
import "@fortawesome/fontawesome-free/js/brands.js"
import "@fortawesome/fontawesome-free/js/regular.js"
import "@fortawesome/fontawesome-free/js/solid.js";
import { ScullyLibModule } from '@scullyio/ng-lib'
import { NavMap } from './fragment/models/nav-map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    FragmentModule,
    ScullyLibModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

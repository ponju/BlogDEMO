import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FragmentModule } from './fragment/fragment.module';

//Fontawesome
import "@fortawesome/fontawesome-free/js/fontawesome.js"
import "@fortawesome/fontawesome-free/js/brands.js"
import "@fortawesome/fontawesome-free/js/regular.js"
import "@fortawesome/fontawesome-free/js/solid.js"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FragmentModule //自動で入る
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

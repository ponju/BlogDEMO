import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { GenericTogglerComponent } from './generic-toggler/generic-toggler.component';

@NgModule({
  declarations: [
    SiteHeaderComponent,
    GenericTogglerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SiteHeaderComponent
  ]
})
export class FragmentModule { }

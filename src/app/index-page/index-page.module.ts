import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FragmentModule } from '../fragment/fragment.module';
import { IndexPageRoutingModule } from './index-page-routing-module';

@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,ScullyLibModule,FragmentModule,IndexPageRoutingModule
  ]
})
export class IndexPageModule { }

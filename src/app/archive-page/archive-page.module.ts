import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivePageComponent } from './archive-page.component';
import { FragmentModule } from '../fragment/fragment.module';
import { ArchivePageRoutingModule } from './archive-page-routing.module';



@NgModule({
  declarations: [
    ArchivePageComponent
  ],
  imports: [
    CommonModule,FragmentModule,ArchivePageRoutingModule
  ]
})
export class ArchivePageModule { 
  
}

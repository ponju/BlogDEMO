import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { GenericTogglerComponent } from './generic-toggler/generic-toggler.component';
import { VerticalAcordionComponent } from './vertical-acordion/vertical-acordion.component';
import { HorizontalAcordionComponent } from './horizontal-acordion/horizontal-acordion.component';
import { BackScreenComponent } from './back-screen/back-screen.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    SiteHeaderComponent,
    GenericTogglerComponent,
    VerticalAcordionComponent,
    HorizontalAcordionComponent,
    BackScreenComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SiteHeaderComponent,
    GenericTogglerComponent,
    VerticalAcordionComponent,
    HorizontalAcordionComponent,
    BackScreenComponent,
    ArticleListComponent
  ]
})
export class FragmentModule { }

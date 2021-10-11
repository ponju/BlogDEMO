import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { GenericTogglerComponent } from './generic-toggler/generic-toggler.component';
import { VerticalAcordionComponent } from './vertical-acordion/vertical-acordion.component';
import { HorizontalAcordionComponent } from './horizontal-acordion/horizontal-acordion.component';
import { BackScreenComponent } from './back-screen/back-screen.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { RouterModule } from '@angular/router';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ScullyContentModule, ScullyLibModule } from '@scullyio/ng-lib';
import { PageNationBarComponent } from './page-nation-bar/page-nation-bar.component';

@NgModule({
  declarations: [
    SiteHeaderComponent,
    GenericTogglerComponent,
    VerticalAcordionComponent,
    HorizontalAcordionComponent,
    BackScreenComponent,
    ArticleListComponent,
    ArticleHeaderComponent,
    PageNationBarComponent
  ],
  imports: [
    CommonModule,RouterModule,ScullyLibModule
  ],
  exports: [
    SiteHeaderComponent,
    GenericTogglerComponent,
    VerticalAcordionComponent,
    HorizontalAcordionComponent,
    BackScreenComponent,
    ArticleListComponent,
    ArticleHeaderComponent,
    PageNationBarComponent
  ]
})
export class FragmentModule { }

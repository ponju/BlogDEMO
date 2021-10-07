import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ArticlePageRoutingModule} from './article-page-routing.module';
import {ArticlePageComponent} from './article-page.component';

@NgModule({
  declarations: [ArticlePageComponent],
  imports: [CommonModule, ArticlePageRoutingModule, ScullyLibModule],
})
export class ArticlePageModule {}

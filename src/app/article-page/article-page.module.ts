import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ArticlePageRoutingModule} from './article-page-routing.module';
import {ArticlePageComponent} from './article-page.component';
import {FragmentModule} from "src/app/fragment/fragment.module"

@NgModule({
  declarations: [ArticlePageComponent],
  imports: [CommonModule, ArticlePageRoutingModule, ScullyLibModule,FragmentModule],
})
export class ArticlePageModule {}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ArticlePageComponent} from './article-page.component';

const routes: Routes = [
  {
    path: ':article',
    component: ArticlePageComponent,
  },
  {
    path: '**',
    component: ArticlePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlePageRoutingModule {}


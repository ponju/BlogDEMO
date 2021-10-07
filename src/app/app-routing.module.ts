import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'article', loadChildren: () => import('./article-page/article-page.module').then(m => m.ArticlePageModule) },
  { path: 'archives', loadChildren: () => import('./archive-page/archive-page.module').then(m => m.ArchivePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

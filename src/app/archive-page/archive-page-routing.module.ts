import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ArchivePageComponent } from './archive-page.component';

const routes: Routes = [
  {
    path: ':page',
    component: ArchivePageComponent,
  },
  {
    path: ':classify/:group/:page',
    component: ArchivePageComponent,
  },
  {
    path: '**',
    component: ArchivePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivePageRoutingModule {}


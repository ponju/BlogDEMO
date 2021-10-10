import { Component } from '@angular/core';
import { NavMap } from './fragment/models/nav-map';

export const SiteName="Scully Blog Demo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  naviRoutes:NavMap[]=[
    {title:"HOME",route:"/",faClazz:"fas fa-home"},
  ]
}

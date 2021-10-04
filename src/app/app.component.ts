import { Component } from '@angular/core';
import { NavMap } from './fragment/models/nav-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DEMO(STATIC)';
  naviRoutes:NavMap[]=[
    {title:"HOME",route:"/",faClazz:"fas fa-home"},
  ]
}

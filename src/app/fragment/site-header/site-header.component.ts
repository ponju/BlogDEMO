import { Component, Input, OnInit } from '@angular/core';
import { NavMap } from '../models/nav-map';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent implements OnInit {
  @Input()
  title?:string
  @Input()
  homeRoute?:string;
  @Input()
  logoURL?:string
  @Input()
  isTopLayout?:boolean
  @Input()
  naviMap?:NavMap[]

  constructor() { }

  ngOnInit(): void {
  }

}

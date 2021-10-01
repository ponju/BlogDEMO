import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent implements OnInit {
  @Input()
  title?:string
  @Input()
  logoURL?:string
  constructor() { }

  ngOnInit(): void {
  }

}

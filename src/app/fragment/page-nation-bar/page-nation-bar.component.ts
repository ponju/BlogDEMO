import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-nation-bar',
  templateUrl: './page-nation-bar.component.html',
  styleUrls: ['./page-nation-bar.component.scss']
})
export class PageNationBarComponent implements OnInit {
  @Input()
  homeUrl?:string|null
  @Input()
  urls?:string[]|null

  @Input()
  current?:number;
  constructor() { }

  ngOnInit(): void {
  }

}

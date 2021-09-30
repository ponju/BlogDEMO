import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'generic-toggler',
  templateUrl: './generic-toggler.component.html',
  styleUrls: ['./generic-toggler.component.scss']
})
export class GenericTogglerComponent implements OnInit {
  @Input()
  faClazz?:string;
  @Input()
  text?:string;

  toggle(){
    console.log("toggle target");
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { AbstractTogglable } from '../abstract-togglable/abstract-togglable';

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

  @Input()
  target?:AbstractTogglable;

  toggle(){
    this.target?.toggle();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

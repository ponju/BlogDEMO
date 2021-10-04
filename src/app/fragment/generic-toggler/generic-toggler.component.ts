import { AfterContentChecked, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractTogglable } from '../abstract-togglable/abstract-togglable';

@Component({
  selector: 'generic-toggler',
  templateUrl: './generic-toggler.component.html',
  styleUrls: ['./generic-toggler.component.scss']
})
export class GenericTogglerComponent implements OnInit {
  @Input()
  target?:AbstractTogglable;
  @Input()
  activeFA?:string;
  @Input()
  offFA?:string;
  @Input()
  text?:string;

  get active(){
    return this.target?this.target.active:false;
  }
  toggle(){
    this.target?.toggle();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

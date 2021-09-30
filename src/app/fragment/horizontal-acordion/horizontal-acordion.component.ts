import { Component, Input, OnInit } from '@angular/core';
import { AbstractTogglable } from '../abstract-togglable/abstract-togglable';
import { horisontalAcordion } from '../angular-animations/acordion';

@Component({
  selector: 'h-acordion',
  templateUrl: './horizontal-acordion.component.html',
  styleUrls: ['./horizontal-acordion.component.scss'],
  animations:[
    horisontalAcordion
  ]
})
export class HorizontalAcordionComponent implements AbstractTogglable,OnInit {
  active=false;
  constructor(){}
  toggle(): void {
   this. active=!this.active;
  }
  turnON(): void {
    this.active=true;
  }
  turnOFF(): void {
    this.active=false;
  }

  ngOnInit(): void {
  }
}

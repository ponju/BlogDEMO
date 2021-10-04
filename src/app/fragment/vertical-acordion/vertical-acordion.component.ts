import { Component, Input, OnInit } from '@angular/core';
import { AbstractTogglable } from '../abstract-togglable/abstract-togglable';
import { verticalAcordion } from '../angular-animations/acordion';

@Component({
  selector: 'v-acordion',
  templateUrl: './vertical-acordion.component.html',
  styleUrls: ['./vertical-acordion.component.scss'],
  animations:[
    verticalAcordion
  ]
})
export class VerticalAcordionComponent implements AbstractTogglable,OnInit { 
  active:boolean=false;
  constructor(){}
  toggle(): void {
   this.active=!this.active;
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

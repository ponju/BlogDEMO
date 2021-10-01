import { Component, Input, OnInit } from '@angular/core';
import { AbstractTogglable } from '../abstract-togglable/abstract-togglable';
import { fadeIN, fadeOUT } from '../angular-animations/fade';

@Component({
  selector: 'back-screen',
  templateUrl: './back-screen.component.html',
  styleUrls: ['./back-screen.component.scss'],
  animations:[fadeIN,fadeOUT]
})
export class BackScreenComponent implements OnInit {
  @Input()
  connected?:AbstractTogglable

  get active(){
    return this.connected?.active
  }

  onClicked(){
    this.connected?.turnOFF();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

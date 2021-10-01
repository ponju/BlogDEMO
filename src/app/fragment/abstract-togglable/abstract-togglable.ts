export interface AbstractTogglable{
    active:boolean;
    toggle():void;
    turnON():void;
    turnOFF():void;
}
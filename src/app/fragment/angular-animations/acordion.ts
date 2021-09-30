import { animate, animation, style, transition, trigger } from "@angular/animations";

export const verticalAcordion =
    trigger('verticalAcordion', [
        transition(':enter', [
            style({height:0}),
            animate(100)
        ]),
        transition(':leave', [
            animate(100,style({height:0})),
        ]),
    ]);

    export const horisontalAcordion =
    trigger('horizontalAcordion', [
        transition(':enter', [
            style({width:0}),
            animate(100)
        ]),
        transition(':leave', [
            animate(100,style({width:0})),
        ]),
    ]);

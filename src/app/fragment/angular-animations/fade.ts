import { animate, animation, style, transition, trigger } from '@angular/animations/';

export const fadeIN =
    trigger('fadeIN', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(100)
        ]),
    ]);

export const fadeOUT =
    trigger('fadeOUT', [
        transition(':leave', [
            animate(100, style({ opacity: 0 })),
        ]),
    ]);

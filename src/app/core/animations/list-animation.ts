import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        stagger(
          '100ms',
          animate(
            '500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0px)',
            })
          )
        ),
      ],
      { optional: true }
    ),
  ]),
]);

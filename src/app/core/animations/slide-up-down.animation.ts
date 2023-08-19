import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
} from '@angular/animations';

export const slideUpDown = trigger('slideUpDown', [
  state(
    'down',
    style({
      opacity: 1,
      maxHeight: '500px',
    })
  ),
  state(
    'up',
    style({
      opacity: 0,
      maxHeight: '0px',
    })
  ),
  transition('down => up', [animate('100ms')]),
  transition('up => down', [animate('300ms')]),
]);

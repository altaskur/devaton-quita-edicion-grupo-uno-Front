import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';

@Directive({
  selector: '[appEscapeKey]',
})
export class EscapeKeyDirective {
  @Output() appEscapeKey = new EventEmitter<KeyboardEvent>();

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') this.appEscapeKey.emit(event);
  }
}

@NgModule({
  declarations: [EscapeKeyDirective],
  exports: [EscapeKeyDirective],
})
export class EscapeKeyModule {}

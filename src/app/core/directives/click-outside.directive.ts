import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const TARGET = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(TARGET)) {
      this.appClickOutside.emit(event);
    }
  }
}

@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ClickOutsideDirective],
})
export class ClickOutsideModule {}

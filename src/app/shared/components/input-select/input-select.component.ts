import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSelectOption } from './input-select-option';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClickOutsideModule } from '@core/directives/click-outside.directive';
import { EscapeKeyModule } from '@core/directives/escape-key.directive';
import { SvgImageComponent } from '../svg-image/svg-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [
    CommonModule,
    ClickOutsideModule,
    EscapeKeyModule,
    SvgImageComponent,
  ],
  templateUrl: './input-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSelectComponent,
      multi: true,
    },
  ],
  animations: [
    trigger('optionAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          height: '180px',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          height: 0,
        })
      ),
      transition('show => hide', [animate('0.1s')]),
      transition('hide => show', [animate('0.2s')]),
    ]),
  ],
})
export class InputSelectComponent implements ControlValueAccessor, OnInit {
  showOptions = false;
  private _optionSelected = new BehaviorSubject<InputSelectOption | undefined>(
    undefined
  );

  @Input() options!: Observable<InputSelectOption[]>;

  @Input() label?: string;

  constructor() {}

  ngOnInit(): void {
    this._optionSelected.subscribe(option => {
      if (option) this.onChange(option);
    });
  }

  get value(): Observable<InputSelectOption | undefined> {
    return this._optionSelected.asObservable();
  }

  onChange = (value: InputSelectOption) => {};

  onTouched = () => {};

  writeValue(obj: InputSelectOption): void {}

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  showMenuOptions() {
    this.showOptions = !this.showOptions;
  }

  selectOption(option: InputSelectOption) {
    this._optionSelected.next(option);
    this.showOptions = false;
  }
}

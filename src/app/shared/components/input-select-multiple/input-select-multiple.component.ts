import { Component, Input, Optional, Self, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { InputSelectOption } from './input-select-option';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClickOutsideModule } from '@core/directives/click-outside.directive';
import { EscapeKeyModule } from '@core/directives/escape-key.directive';
import { SvgImageComponent } from '../svg-image/svg-image.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-input-select-multiple',
  standalone: true,
  imports: [
    CommonModule,
    ClickOutsideModule,
    EscapeKeyModule,
    SvgImageComponent,
  ],
  templateUrl: './input-select-multiple.component.html',
  animations: [
    trigger('optionAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          maxHeight: '200px',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          height: 0,
        })
      ),
      transition('hide => show', [animate('0.2s')]),
    ]),
  ],
})
export class InputSelectMultipleComponent
  implements OnInit, ControlValueAccessor
{
  showOptions = false;

  @Input() options!: Observable<InputSelectOption[]>;

  @Input() label?: string;

  private _optionSelected$ = new BehaviorSubject<
    InputSelectOption[] | undefined
  >(undefined);

  private _optionSelected: InputSelectOption[] = [];

  constructor(@Self() @Optional() private control: NgControl) {
    if (control != null) {
      control.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this._optionSelected$.subscribe(option => {
      if (option) this.onChange(option);
    });
  }

  get value(): Observable<InputSelectOption[] | undefined> {
    return this._optionSelected$.asObservable();
  }

  onChange = (value: InputSelectOption[]) => {};

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

  isSelected(option: InputSelectOption): boolean {
    return !!this._optionSelected.find(item => item.value === option.value);
  }

  selectOption(option: InputSelectOption) {
    if (this.isSelected(option)) {
      this._optionSelected = this._optionSelected.filter(
        item => item.value !== option.value
      );
    } else {
      this._optionSelected.push(option);
    }

    this._optionSelected$.next(this._optionSelected);
    this.showOptions = false;
  }

  public get invalid(): boolean {
    return this.control.control?.invalid ?? false;
  }

  public get touched(): boolean {
    return this.control.control?.touched ?? false;
  }

  public get dirty(): boolean {
    return this.control.control?.dirty ?? false;
  }

  public get errors(): ValidationErrors {
    return this.control.control?.errors ?? {};
  }

  public get showErrors(): boolean {
    return this.invalid && this.touched && this.dirty;
  }
}

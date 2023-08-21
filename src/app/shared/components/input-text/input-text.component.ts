import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() variant: 'text' | 'textarea' = 'text';

  focusOut = true;

  constructor(@Self() @Optional() private control: NgControl) {
    if (control != null) {
      control.valueAccessor = this;
    }
  }

  onChange = (value: string) => {};

  onFocused = () => {
    this.focusOut = false;
  };

  onTouched = () => {};

  writeValue(value: string): void {}

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    console.log('registerOnTouched');

    this.onTouched = fn;
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
    return this.invalid && (this.touched || this.dirty) && this.focusOut;
  }
}

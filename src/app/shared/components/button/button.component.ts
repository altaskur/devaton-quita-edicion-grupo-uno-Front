import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      (click)="goToAction()"
      class="bg-orange-500 my-5 hover:bg-orange-600 transition duration-300 ease-in-out
       text-white font-bold rounded-full px-4 py-2 focus:outline-none w-full">
      {{ content }}
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() action = new EventEmitter<Boolean>();
  @Input() content!: string;

  goToAction() {
    this.action.emit(true);
  }
}

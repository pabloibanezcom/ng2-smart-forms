import { Component, Input } from '@angular/core';

@Component({
  selector: 'smart-form-text-rc',
  templateUrl: './form-text-rc.component.html',
  styleUrls: ['./form-text-rc.component.scss']
})
export class FormTextRCComponent {

  @Input() type = 'text';
  @Input() disabled: boolean;
  @Input() class: string;
  @Input() label: string;
  @Input() formControlName: string;

  constructor() {
    console.log('smart-form-text-rc');
   }

}

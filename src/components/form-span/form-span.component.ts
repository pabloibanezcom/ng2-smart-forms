import { Component, Input } from '@angular/core';

@Component({
  selector: 'smart-form-span',
  templateUrl: './form-span.component.html',
  styleUrls: ['./form-span.component.scss']
})
export class FormSpanComponent {

  @Input() class: string;
  @Input() label: string;
  @Input() model: string;

  constructor() { }

}

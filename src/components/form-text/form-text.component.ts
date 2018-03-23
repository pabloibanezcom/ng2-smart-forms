import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smart-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent implements OnInit {

  @Input() type: string;
  @Input() disabled: boolean;
  @Input() multiLine: boolean;
  @Input() class: string;
  @Input() label: string;
  @Input() error: any;
  @Input() model: any;
  @Output() modelChange: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.type) {
      this.type = 'text';
    }
  }

  updateData(event) {
    this.error = null;
    this.model = event;
    this.modelChange.emit(event);
  }

}

import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smart-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit, OnChanges {

  @Input() type: string;
  @Input() class: string;
  @Input() label: string;
  @Input() error: any;
  @Input() dataOption: string;
  @Input() options: any[];
  @Input() optionLabel: string;
  @Input() optionValue: string;
  @Input() emptyOption: boolean;
  @Input() model: any;
  @Output() modelChange: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.optionLabel = this.optionLabel ? this.optionLabel : 'label';
    this.optionValue = this.optionValue ? this.optionValue : 'value';
    if (!this.options) {
      this.setOptions();
    }
    this.updateModel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.model) {
      this.updateModel();
    }
    if (changes && changes.options) {
      if (this.options && this.emptyOption) {
        this.options.unshift({ label: '', value: null });
      }
    }
  }

  updateData(event) {
    this.error = null;
    this.model = event;
    this.modelChange.emit(event);
  }

  private setOptions() {
    this.options = [];
    if (this.type === 'YesNo') {
      this.options.push({ label: 'Si', value: true });
      this.options.push({ label: 'No', value: false });
    }
  }

  private updateModel() {
    if (this.model && this.model[this.optionValue]) {
      this.model = this.model[this.optionValue];
    }
  }

}

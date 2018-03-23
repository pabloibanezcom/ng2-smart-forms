import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormSpanComponent } from './components/form-span/form-span.component';
import { FormTextComponent } from './components/form-text/form-text.component';
import { FormTextRCComponent } from './components/form-text-rc/form-text-rc.component';

export * from './components/form-button/form-button.component';
export * from './components/form-select/form-select.component';
export * from './components/form-span/form-span.component';
export * from './components/form-text/form-text.component';
export * from './components/form-text-rc/form-text-rc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormButtonComponent,
    FormSelectComponent,
    FormSpanComponent,
    FormTextComponent,
    FormTextRCComponent
  ],
  exports: [
    FormButtonComponent,
    FormSelectComponent,
    FormSpanComponent,
    FormTextComponent,
    FormTextRCComponent
  ]
})

export class Ng2SmartFormsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2SmartFormsModule
    };
  }
}

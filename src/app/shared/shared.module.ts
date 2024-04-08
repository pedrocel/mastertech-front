import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CepMaskDirective,
  CpfMaskDirective,
  CnpjMaskDirective,
  PhoneMaskDirective,
} from '@hubsd/directives';

@NgModule({
  declarations: [
    PhoneMaskDirective,
    CpfMaskDirective,
    CnpjMaskDirective,
    CepMaskDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PhoneMaskDirective,
    CpfMaskDirective,
    CnpjMaskDirective,
    CepMaskDirective,
  ],
})
export class SharedModule {}

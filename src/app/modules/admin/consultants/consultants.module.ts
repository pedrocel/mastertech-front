import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../../shared/shared.module';

import { HubsdHeaderModule } from '@hubsd/components/header/header.module';
import { HubsdTableModule } from '@hubsd/components/table';

import { consultantsRouting } from './consultants.routing';
import { ConsultantsListComponent } from './components/consultants-list/consultants-list.component';
import { ConsultantsFormComponent } from './components/consultants-form/consultants-form.component';

@NgModule({
  declarations: [ConsultantsListComponent, ConsultantsFormComponent],
  imports: [
    RouterModule.forChild(consultantsRouting),
    NgIf,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SharedModule,
    HubsdHeaderModule,
    HubsdTableModule,
    MatOptionModule,
    MatSelectModule,
  ],
})
export class ConsultantsModule {}

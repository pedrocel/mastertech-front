import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../../shared/shared.module';

import { HubsdHeaderModule } from '@hubsd/components/header/header.module';
import { HubsdTableModule } from '@hubsd/components/table';

import { companiesRoutes } from './companies-types.routing';
import { CompaniesTypesListComponent } from './components/companies-types-list/companies-types-list.component';
import { CompaniesTypesFormComponent } from './components/companies-types-form/companies-types-form.component';

@NgModule({
  declarations: [CompaniesTypesListComponent, CompaniesTypesFormComponent],
  imports: [
    RouterModule.forChild(companiesRoutes),
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
  ],
})
export class CompaniesTypesModule {}

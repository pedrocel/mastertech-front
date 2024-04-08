import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '../../../shared/shared.module';

import { HubsdHeaderModule } from '@hubsd/components/header/header.module';
import { HubsdTableModule } from '@hubsd/components/table';

import { menusRoutes } from './menus.routing';
import { MenusListComponent } from './components/menus-list/menus-list.component';
import { MenusFormComponent } from './components/menus-form/menus-form.component';
import { MenusPrivilegesFormComponent } from './components/menus-privileges-form/menus-privileges-form.component';

@NgModule({
  declarations: [
    MenusListComponent,
    MenusFormComponent,
    MenusPrivilegesFormComponent,
  ],
  imports: [
    RouterModule.forChild(menusRoutes),
    NgIf,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCheckboxModule,
    SharedModule,
    HubsdHeaderModule,
    HubsdTableModule,
  ],
})
export class MenusModule {}

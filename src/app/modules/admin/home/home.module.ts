import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HubsdTableModule } from '@hubsd/components/table';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HubsdTableModule, SharedModule, MatIconModule, MatMenuModule],
  declarations: [HomeComponent],
})
export class HomeModule {}

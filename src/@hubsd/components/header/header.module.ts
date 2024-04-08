import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HubsdHeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, RouterLink, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule],
  declarations: [HubsdHeaderComponent],
  exports: [HubsdHeaderComponent],
})
export class HubsdHeaderModule {}

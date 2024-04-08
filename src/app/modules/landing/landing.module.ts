import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from '../../shared/shared.module';
import { landingRoutes } from './landing.routing';
import { LandingComponent } from './landing.component';
import { LandingAboutComponent } from './components/about/about.component';
import { LandingContactComponent } from './components/contact/contact.component';
import { LandingFooterComponent } from './components/footer/footer.component';
import { LandingHeaderComponent } from './components/header/header.component';
import { LandingHeroComponent } from './components/hero/hero.component';
import { LandingSolutionsComponent } from './components/solutions/solutions.component';

@NgModule({
  imports: [
    RouterModule.forChild(landingRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    SharedModule,
    NgOptimizedImage,
    MatRadioModule,
    MatMenuModule,
  ],
  declarations: [
    LandingComponent,
    LandingAboutComponent,
    LandingContactComponent,
    LandingFooterComponent,
    LandingHeaderComponent,
    LandingHeroComponent,
    LandingSolutionsComponent,
  ],
})
export class LandingModule {}

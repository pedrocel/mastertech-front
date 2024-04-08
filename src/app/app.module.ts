import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Core Modules
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';

// Libs Modules
import { HubsdModule } from '@hubsd/hubsd.module';
import { HubsdConfigModule } from '@hubsd/services/config';
import { HubsdMockApiModule } from '@hubsd/mock-api';
import { HubsdToastModule } from '@hubsd/components/toast';

// Configs
import { appConfig } from './core/config/app.config';
import { GraphQLModule } from './graphql.module';
import { appRoutes } from './app.routing';
import { mockApiServices } from './mock-api';


const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [
    BrowserModule,
    HubsdToastModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    HubsdModule,
    HubsdConfigModule.forRoot(appConfig),
    HubsdMockApiModule.forRoot(mockApiServices, { delay: 500 }),
    LayoutModule,
    GraphQLModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

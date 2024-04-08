import { Route } from '@angular/router';

import { ReportsListComponent } from './components/reports-list/reports-list.component';

export const reportsRoutes: Route[] = [
  {
    path: '',
    component: ReportsListComponent,
    data: {
      title: 'Listar',
    }
  },
];

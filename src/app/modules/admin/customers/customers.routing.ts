import { Route } from '@angular/router';

import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersFormComponent } from './components/customers-form/customers-form.component';

export const customersRouting: Route[] = [
  {
    path: '',
    component: CustomersListComponent,
    data: {
      title: 'Listar',
    }
  },
  {
    path: 'criar',
    component: CustomersFormComponent,
    data: {
      title: 'Criar',
    }
  },
  {
    path: 'editar/:id',
    component: CustomersFormComponent,
    data: {
      title: 'Editar',
    }
  },
];

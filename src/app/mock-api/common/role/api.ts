import { Injectable } from '@angular/core';
import { HubsdMockApiService } from '@hubsd/mock-api';

import { roles } from './data';

@Injectable({
  providedIn: 'root'
})
export class RolesMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/roles')
      .reply(() => {
        return [
          200,
          roles
        ];
      });
  }
}

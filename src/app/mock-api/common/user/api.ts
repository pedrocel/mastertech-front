import { Injectable } from '@angular/core';
import { HubsdMockApiService } from '@hubsd/mock-api';

import { users } from './data';

@Injectable({
  providedIn: 'root'
})
export class UsersMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/users')
      .reply(() => {
        return [
          200,
          users
        ];
      });
  }
}

import { Injectable } from '@angular/core';
import { HubsdMockApiService } from '@hubsd/mock-api';

import { customers } from './data';

@Injectable({
  providedIn: 'root'
})
export class CustomersMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/customers')
      .reply(() => {
        return [
          200,
          customers
        ];
      });
  }
}

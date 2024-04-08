import { Injectable } from '@angular/core';
import { HubsdMockApiService } from '@hubsd/mock-api';

import { companies } from './data';

@Injectable({
  providedIn: 'root'
})
export class CompaniesMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/companies')
      .reply(() => {
        return [
          200,
          companies
        ];
      });
  }
}

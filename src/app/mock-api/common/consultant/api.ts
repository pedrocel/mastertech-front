import { Injectable } from '@angular/core';
import { HubsdMockApiService } from '@hubsd/mock-api';

import { consultants } from './data';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/consultants')
      .reply(() => {
        return [
          200,
          consultants
        ];
      });
  }
}

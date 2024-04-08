import { Injectable } from '@angular/core';
import { HubsdMockApiService } from '@hubsd/mock-api';

import { actions } from './data';

@Injectable({
  providedIn: 'root'
})
export class ActionsMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/actions')
      .reply(() => {
        return [
          200,
          actions
        ];
      });
  }
}

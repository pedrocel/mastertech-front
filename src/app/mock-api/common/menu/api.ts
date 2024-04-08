import { Injectable } from '@angular/core';
import { HubsdMockApiService } from '@hubsd/mock-api';

import { menus } from './data';

@Injectable({
  providedIn: 'root'
})
export class MenusMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/menus')
      .reply(() => {
        return [
          200,
          menus
        ];
      });
  }
}

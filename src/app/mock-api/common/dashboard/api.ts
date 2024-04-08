import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';

import { HubsdMockApiService } from '@hubsd/mock-api';

import { adminDashboardData, lastReportsData } from '../dashboard/data';

@Injectable({
  providedIn: 'root'
})
export class DashboardMockApi {
  constructor(private service: HubsdMockApiService) {
    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onGet('api/dashboard/summary')
      .reply(() => {
        return [
          200,
          adminDashboardData
        ];
      });

    this.service
      .onGet('api/dashboard/reports')
      .reply(() => {
        return [
          200,
          lastReportsData
        ];
      });
  }
}

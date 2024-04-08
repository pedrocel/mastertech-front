import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardReportInterface, DashboardSummaryInterface } from './home.types';
import { HomeService } from './home.service';

import { HubsdTableInterface } from '@hubsd/components/table';
import { adminDashboardData, lastReportsData } from '../../../mock-api/common/dashboard/data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public summary: DashboardSummaryInterface[] = adminDashboardData;
  public reports: DashboardReportInterface[] = lastReportsData;

  public config: HubsdTableInterface = {
    title: 'Últimas análises tarifárias',
    headers: [
      { name: 'Empresa' },
      { name: 'Solicitante' },
      { name: 'Status' },
      { name: 'Data' },
    ],
    content: [
      { type: 'field', key: 'company.name' },
      { type: 'field', key: 'user.name' },
      { type: 'field', key: 'status' },
      { type: 'timestamp', key: 'createdAt' },
    ],
    showMore: true,
  };

  constructor(private readonly service: HomeService) {}

  ngOnInit(): void {
    // this.service.getSummary().subscribe((res) => {
    //   this.summary = res;
    // });

    // this.service.getReports().subscribe((res) => {
    //   this.reports = res;
    // });
  }
}

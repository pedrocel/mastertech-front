import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardSummaryInterface, DashboardReportInterface } from './home.types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private readonly httpClient: HttpClient) {}

  getSummary(): Observable<DashboardSummaryInterface[]> {
    return this.httpClient.get<DashboardSummaryInterface[]>('@hubsd-api/dashboard/summary');
  }

  getReports(): Observable<DashboardReportInterface[]> {
    return this.httpClient.get<DashboardReportInterface[]>('@hubsd-api/dashboard/reports');
  }
}

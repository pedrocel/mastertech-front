export interface DashboardSummaryInterface {
  name: string;
  value: number;
  subtitle: string;
  subtitleValue: string;
  ringColor: string;
}

export interface DashboardReportInterface {
  company?: any;
  user?: any;
  status: string;
  createdAt: Date;
}

import { AuthMockApi } from './common/auth/api';
import { DashboardMockApi } from './common/dashboard/api';

import { ActionsMockApi } from './common/action/api';
import { ConsultantsMockApi } from './common/consultant/api';
import { CustomersMockApi } from './common/customer/api';
import { CompaniesMockApi } from './common/company/api';
import { MenusMockApi } from './common/menu/api';
import { RolesMockApi } from './common/role/api';
import { UsersMockApi } from './common/user/api';

export const mockApiServices = [
  AuthMockApi,
  DashboardMockApi,
  ActionsMockApi,
  CompaniesMockApi,
  ConsultantsMockApi,
  CustomersMockApi,
  MenusMockApi,
  RolesMockApi,
  UsersMockApi,
];

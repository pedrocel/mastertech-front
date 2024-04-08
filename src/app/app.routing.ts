import { Route } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AuthGuard } from './core/auth/guards/auth.guard';
import { NoAuthGuard } from './core/auth/guards/no-auth.guard';
import { RoleGuard } from './core/auth/guards/role.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/landing/landing.module').then(
            (m) => m.LandingModule
          ),
      },
    ],
  },
  { path: '-', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    canActivate: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.AuthSignInModule
          ),
      },
      {
        path: 'registrar',
        loadChildren: () =>
          import('./modules/auth/sign-up/sign-up.module').then(
            (m) => m.AuthSignUpModule
          ),
      },
      {
        path: 'esqueci-minha-senha',
        loadChildren: () =>
          import('./modules/auth/forgot-password/forgot-password.module').then(
            (m) => m.AuthForgotPasswordModule
          ),
      },
      {
        path: 'redefinir-senha',
        loadChildren: () =>
          import('./modules/auth/reset-password/reset-password.module').then(
            (m) => m.AuthResetPasswordModule
          ),
      },
    ],
  },
  {
    path: '',
    canMatch: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'sidebar',
    },
    children: [
      {
        path: 'dashboard',
        canMatch: [RoleGuard],
        data: {
          title: 'Dashboard',
          menuKey: 'DASHBOARD',
        },
        loadChildren: () =>
          import('./modules/admin/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'acoes',
        canMatch: [RoleGuard],
        data: {
          title: 'Ações',
          menuKey: 'ACTIONS',
        },
        loadChildren: () =>
          import('./modules/admin/actions/actions.module').then(
            (m) => m.ActionsModule
          ),
      },
      {
        path: 'analises',
        canMatch: [RoleGuard],
        data: {
          title: 'Análises',
          menuKey: 'REPORTS',
        },
        loadChildren: () =>
          import('./modules/admin/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'clientes',
        canMatch: [RoleGuard],
        data: {
          title: 'Clientes',
          menuKey: 'CUSTOMERS',
        },
        loadChildren: () =>
          import('./modules/admin/customers/customers.module').then(
            (m) => m.CustomersModule
          ),
      },
      {
        path: 'consultores',
        canMatch: [RoleGuard],
        data: {
          title: 'Consultores',
          menuKey: 'CONSULTANTS',
        },
        loadChildren: () =>
          import('./modules/admin/consultants/consultants.module').then(
            (m) => m.ConsultantsModule
          ),
      },
      {
        path: 'empresas',
        canMatch: [RoleGuard],
        data: {
          title: 'Empresas',
          menuKey: 'COMPANIES',
        },
        loadChildren: () =>
          import('./modules/admin/companies/companies.module').then(
            (m) => m.CompaniesModule
          ),
      },
      {
        path: 'menus',
        canMatch: [RoleGuard],
        data: {
          title: 'Menus',
          menuKey: 'MENUS',
        },
        loadChildren: () =>
          import('./modules/admin/menus/menus.module').then(
            (m) => m.MenusModule
          ),
      },
      {
        path: 'perfis-de-acessos',
        canMatch: [RoleGuard],
        data: {
          title: 'Perfis de Acessos',
          menuKey: 'ROLES',
        },
        loadChildren: () =>
          import('./modules/admin/roles/roles.module').then(
            (m) => m.RolesModule
          ),
      },
      {
        path: 'tipo-de-empresa',
        canMatch: [RoleGuard],
        data: {
          title: 'Tipo de Empresa',
          menuKey: 'COMPANIES-TYPE',
        },
        loadChildren: () =>
          import('./modules/admin/companies-types/companies-types.module').then(
            (m) => m.CompaniesTypesModule
          ),
      },
      {
        path: 'termo-de-servico',
        canMatch: [RoleGuard],
        data: {
          title: 'Termo de Serviço',
          menuKey: 'TERMS-SERVICE',
        },
        loadChildren: () =>
          import('./modules/admin/term-user/term-user.module').then(
            (m) => m.TermUserModule
          ),
      },
      {
        path: 'usuarios',
        canMatch: [RoleGuard],
        data: {
          title: 'Usuários',
          menuKey: 'USERS',
        },
        loadChildren: () =>
          import('./modules/admin/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'minha-conta',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

import { mockPrivileges } from '../../utils/mock-privileges';
import { companyAdminMenus, menus } from '../menu/data';
import { roles } from '../role/data';

export const admin = {
  id: 1,
  name: 'Administrador Master',
  email: 'admin@al.senai.br',
  companyId: null,
  roleId: 1,
  role: roles[0], // Administrador
  menus,
  privileges: mockPrivileges(menus),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const companyAdmin = {
  id: 2,
  name: 'Administrador da Empresa',
  email: 'empresa@al.senai.br',
  companyId: 1,
  roleId: 2,
  role: roles[1], // Administrador da Empresa
  menus: companyAdminMenus,
  privileges: mockPrivileges(companyAdminMenus),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const companyConsultant = {
  id: 3,
  name: 'Consultor',
  email: 'consultor@al.senai.br',
  companyId: 1,
  roleId: 3,
  role: roles[2], // Consultor da Empresa
  menus: companyAdminMenus,
  privileges: mockPrivileges(companyAdminMenus),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const companyCustomer = {
  id: 4,
  name: 'Cliente',
  email: 'cliente@al.senai.br',
  companyId: 1,
  roleId: 4,
  role: roles[3], // Cliente da Empresa
  menus: companyAdminMenus,
  privileges: mockPrivileges(companyAdminMenus),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const authUsers = [
  admin,
  companyAdmin,
  companyConsultant,
  companyCustomer,
];

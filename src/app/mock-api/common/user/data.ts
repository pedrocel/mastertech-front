import { UserInterface } from '../../../modules/admin/users/users.types';
import { roles } from '../role/data';

export const users: UserInterface[] = [
  {
    id: 1,
    name: 'Administrador Master',
    email: 'admin@al.senai.br',
    personType: 'FÍSICA',
    companyId: null,
    roleId: 1,
    role: roles[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Administrador da Empresa',
    email: 'empresa@al.senai.br',
    personType: 'FÍSICA',
    companyId: 1,
    roleId: 2,
    role: roles[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'Consultor',
    email: 'consultor@al.senai.br',
    personType: 'FÍSICA',
    companyId: 1,
    roleId: 3,
    role: roles[2],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'Cliente',
    email: 'cliente@al.senai.br',
    personType: 'FÍSICA',
    companyId: 1,
    roleId: 4,
    role: roles[3],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

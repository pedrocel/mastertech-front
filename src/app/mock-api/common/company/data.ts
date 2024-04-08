import { CompanyInterface } from '../../../modules/admin/companies/companies.types';
import { users } from '../user/data';

export const companies: CompanyInterface[] = [
  {
    id: 1,
    name: 'SENAI',
    users: [...users],
    adminId: users[0].id,
    admin: users[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'SESI',
    users: [users[0], users[1]],
    adminId: users[1].id,
    admin: users[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'SESC',
    users: [users[0], users[1]],
    adminId: users[1].id,
    admin: users[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'SENAC',
    users: [users[0], users[1]],
    adminId: users[1].id,
    admin: users[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: 'SEBRAE',
    users: [users[0], users[1]],
    adminId: users[1].id,
    admin: users[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

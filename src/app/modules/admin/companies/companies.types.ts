import { UserInterface } from '../users/users.types';

export interface CompanyInterface {
  id?: number;
  name: string;
  users?: UserInterface[]
  adminId: number;
  admin?: UserInterface;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyPaginatedInterface {
  rows: CompanyInterface[];
  count: number;
}

export interface CompanyFilterInterface {
  name?: string;
}
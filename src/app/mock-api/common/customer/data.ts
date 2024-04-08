import { users } from '../user/data';

export const customers = users.filter((item) => item.roleId === 4);

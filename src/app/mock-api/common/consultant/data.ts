import { users } from '../user/data';

export const consultants = users.filter((item) => item.roleId === 3);

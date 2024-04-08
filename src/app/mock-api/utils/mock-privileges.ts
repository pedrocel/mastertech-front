import { actions } from '../common/action/data';

export function mockPrivileges(menus: any): string[] {
  const privileges = [];

  menus.forEach(item => {
    actions.forEach(element => {
      privileges.push(`${item.menuKey.toUpperCase()}_${element.name.toUpperCase()}`);
    });
  });

  return privileges;
}
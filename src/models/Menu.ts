export interface Menu {
  text: string;
  menus: Menu[];
  submenu?: boolean;
}

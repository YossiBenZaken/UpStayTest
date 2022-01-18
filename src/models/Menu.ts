export interface Menu {
  text: string;
  menus: Menu[];
  submenu?: boolean;
}
export const initinalState: Menu[] = [
    {
      menus: [
        {
          menus: [
            {
              menus: [
                {
                  menus: [],
                  text: "Submenu 1",
                },
                {
                  menus: [],
                  text: "Submenu 1",
                },
              ],
              text: "Menu 1-1-1",
            },
            {
              menus: [],
              text: "Menu 1-1-2",
            },
          ],
          text: "menu1",
        },
        {
          menus: [],
          text: "menu2",
        },
      ],
      text: "Menu 1",
    },
    {
      menus: [
        {
          menus: [],
          text: "Menu 2",
        },
      ],
      text: "Menu 2",
    },
    {
      menus: [],
      text: "Menu 3",
    },
    {
      menus: [],
      text: "Menu 4",
    },
  ];
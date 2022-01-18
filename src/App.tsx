import { useState } from "react";
import "./App.css";
import { MenuButton } from "./components/MenuButton";
import { Menu } from "./models/Menu";

function App() {
  const [menus, setMenus] = useState([
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
  ]);
  return (
    <div className="App">
      <h1>Simple Menu Test</h1>
      <div className="navBar">
        <div>Home</div>
        {menus.map((menu: Menu, index: number) => (
          <MenuButton
            key={index}
            menus={menu.menus}
            text={menu.text}
            submenu={false}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

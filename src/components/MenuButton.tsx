import React, { useState } from "react";
import { Menu } from "../models/Menu";
import "./MenuButton.css";
interface Props {
  menus: Menu[];
  text: string;
  submenu: boolean;
}

export const MenuButton = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="menu"
      onMouseEnter={() => setOpen((prev) => !prev)}
      onMouseLeave={() => setOpen(false)}
    >
      {props.text}
      <div
        className={`${props.submenu ? "subMenu" : "menuIn"} ${
          open ? "open" : ""
        }`}
      >
        {props.menus.map((menu: Menu, index: number) => (
          <MenuButton
            key={index}
            menus={menu.menus}
            text={menu.text}
            submenu={!!props.menus.length}
          />
        ))}
      </div>
    </div>
  );
};

import { useState } from "react";
import "./App.css";
import { MenuButton } from "./components/MenuButton";
import { initinalState, Menu } from "./models/Menu";

function App() {
  const [menus,_] = useState(initinalState);
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

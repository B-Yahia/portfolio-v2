import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function Header() {
  return (
    <div className="container">
      <div className="menu_container">
        <Logo />
        <NavigationMenu />
      </div>
    </div>
  );
}

export default Header;

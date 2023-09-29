import React from "react";
import "../../App.css";
import "./NavigationMenu.css";

function NavigationMenu() {
  return (
    <div className="NavigationMenu_container">
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavigationMenu;

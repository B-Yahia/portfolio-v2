import React from "react";
import "../../App.css";
import "./NavigationMenu.css";
import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <div className="NavigationMenu_container">
      <ul>
        <li>
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to={"/projects"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;

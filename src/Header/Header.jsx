import React from "react";
import "./Header.scss";
import icon from "./icon.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <img src={icon} alt="icon" />
        <div className="nav-bar">
          <NavLink to="/">Characters</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/episodes">Episodes</NavLink>
        </div>
      </header>
    </>
  );
}
import React from "react";
import { NavbarItems } from "../constants";
import NavbarItem from "./NavbarItem";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        {NavbarItems.map((item, index) => (
          <NavbarItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

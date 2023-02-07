import React, { useState } from "react";
import { NavbarItems } from "../constants";
import NavbarItem from "./NavbarItem";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="navbar">
      <ul>
        {NavbarItems.map((item, index) => (
          <NavbarItem
            item={item}
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

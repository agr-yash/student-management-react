import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ item }) => {
  return (
    <li>
      <Link to={`/${item}`}>{item}</Link>
    </li>
  );
};

export default NavbarItem;

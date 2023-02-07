import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarItem.css";
import classnames from "classnames";

const NavbarItem = ({ item, index, setActiveIndex, activeIndex }) => {
  return (
    <li onClick={(e) => setActiveIndex(index)}>
      <Link
        to={`/${item}`}
        className={classnames(index === activeIndex ? "list-active" : "")}
      >
        {item}
      </Link>
    </li>
  );
};

export default NavbarItem;

import React from "react";
import List from "../components/List";
import "../styles/ListPage.css";

const ListPage = ({ listName }) => {
  return (
    <div className="listpage">
      <List listName={listName} />
    </div>
  );
};

export default ListPage;

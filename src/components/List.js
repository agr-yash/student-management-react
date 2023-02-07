import React, { useEffect, useState } from "react";
import "../styles/List.css";
import LoadingPage from "./LoadingPage";

const List = ({ listName }) => {
  const [list, setList] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const fun = (listName) => {
    fetch(`http://localhost:8080/${listName}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res);
        setIsFetched(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fun(listName);
  }, [listName]);

  if (!isFetched) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>{listName.toUpperCase()}</h1>
      <div className="table">
        {list.map((element) => (
          <div className="table-row" key={element.id}>
            <h2>{element.name}</h2>
            {element.branchName && <h2>{element.branchName}</h2>}
            {element.hod && <h2>{element.hod}</h2>}
          </div>
        ))}
      </div>
    </>
  );
};

export default List;

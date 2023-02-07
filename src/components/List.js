import React, { useEffect, useState } from "react";

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
    return <></>;
  }

  return (
    <>
      <h1>{listName.toUpperCase()}</h1>
      {list.map((element) => (
        <h2 id={element.id}>{element.name}</h2>
      ))}
    </>
  );
};

export default List;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/List.css";
import LoadingPage from "./LoadingPage";

const List = ({ listName }) => {
  const [list, setList] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const getList = (listName) => {
    fetch(`http://localhost:8080/${listName}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res);
        setIsFetched(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:8080/${listName}/${id}`).then((res) => {
      getList(listName);
    });
  };

  const trashStyle = {
    fontSize: "32px",
    color: "white",
    paddingRight: "1rem",
  };

  useEffect(() => {
    getList(listName);
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
            {element.emailId && <h2>{element.emailId}</h2>}
            {element.phoneNumber && <h2>{element.phoneNumber}</h2>}
            {element.cgpa && <h2>{element.cgpa}</h2>}
            {element.seats && <h2>{element.seats}</h2>}
            {element.filledSeats && <h2>{element.filledSeats}</h2>}
            {element.faculites && <h2>{element.faculties}</h2>}
            <i
              className="fa fa-trash-o on-hover"
              style={trashStyle}
              onClick={() => deleteItem(element.id)}
            ></i>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;

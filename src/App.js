import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isData, setData] = useState([]);
  const [isName, setName] = useState("");
  const [isAge, setAge] = useState(0);
  const [isNewData, setNewData] = useState(null);
  const [isNewName, setNewName] = useState("");

  const fetchData = async () => {
    // await fetch("http://localhost:3001/cloud/users")
    //   .then((res) => res.json())
    //   .then((item) => {
    //     setData(item?.userlist);
    //   });

    axios.get("http://localhost:3001/cloud/users").then((res) => {
      setData(res?.data?.userlist);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add User Handler
  const submitHandler = async () => {
    let request_data = {
      name: "Abc",
      age: 21,
    };

    axios
      .post("http://localhost:3001/cloud/create-user", request_data)
      .then((res) => {
        console.log("res", res);
        alert("User Created!");
        fetchData();
      });

    // await fetch("http://localhost:3001/cloud/create-user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(request_data),
    // }).then((res) => {
    //   console.log("res", res);
    // });
  };

  // Update Handler
  const updateHandler = async (id) => {
    const request_data = {
      name: isNewName,
    };

    axios
      .patch(`http://localhost:3001/cloud/user/${id}`, request_data)
      .then((res) => {
        console.log("res-->", res);
        alert("User Updated!");
        fetchData();
      });

    // await fetch(`http://localhost:3001/cloud/user/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(request_data),
    // }).then((res) => {
    //   fetchData();
    // });
  };

  // Item Selected Handler
  const selectedItemHandler = (item) => {
    setNewData(item);
    setNewName(item.name);
  };

  // Delete Handler
  const deleteHandler = async (item) => {
    axios
      .delete(`http://localhost:3001/cloud/user/${item?._id}`)
      .then((res) => {
        alert(res?.data?.message);
        fetchData();
      });

    // await fetch(`http://localhost:3001/cloud/user/${item?._id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     alert(data?.message);
    //     fetchData();
    //   });
  };

  return (
    <div className="main_container">
      <button onClick={() => submitHandler()}>Add User</button>
      {isData?.map((item) => (
        <div className="subContainer" key={item?._id}>
          <h4>{item?.name}</h4>
          <h4>{item?.age}</h4>
          <button onClick={() => selectedItemHandler(item)}>Update</button>
          <button className="main_button" onClick={() => deleteHandler(item)}>
            Delete
          </button>
        </div>
      ))}

      <>
        {isNewData && (
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              value={isNewName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button
              className="main_button"
              onClick={() => updateHandler(isNewData._id)}
            >
              Edit Data
            </button>
          </div>
        )}
      </>
    </div>
  );
}

export default App;

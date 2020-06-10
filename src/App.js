import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./form";

function App() {
  const dummyData = [
    {
      name: "adsa",
      email: "dasd",
      role: "ddsada",
    },
  ];

  const [data, setData] = useState(dummyData);

  const initialState = {
    name: "",
    email: "",
    role: "",
  };

  const [tm, setTm] = useState(initialState);
  const submit = (event) => {
    event.preventDefault();
    setData([...data, tm]);
  };
  const changeInfo = (event) => {
    setTm({ ...tm, [event.target.name]: event.target.value });
  };
  console.log(tm);
  return (
    <div className="App">
      <h1>Team</h1>
      <hr />
      <Form onSubmit={submit} team={tm} onChange={changeInfo} />
      {data.map((e) => {
        return (
          <div>
            <p>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

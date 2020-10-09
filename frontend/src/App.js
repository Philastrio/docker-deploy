import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [lists, setLists] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get("/api/value").then((response) => {
      console.log("response", response);
      setLists(response.data);
    });
  });

  const ChangeHandler = (event) => {
    setValue(event.currentTarget.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    axios
      .get(`/api/value`, {
        value: value,
      })
      .then((res) => {
        if (res.data.success) {
          console.log("res.data", res.data);
          setLists([...lists, res.data]);
          setValue("");
        } else {
          alert("값을 DB에 넣는데 실패했습니다");
        }
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {lists &&
            lists.map((list, index) => <li key={index}>{list.value}</li>)}
          <form className="example" onSubmit={submitHandle}>
            <input
              type="text"
              placeholder="입력해주세요..."
              onChange={ChangeHandler}
              value={value}
            />
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;

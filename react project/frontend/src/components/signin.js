import "./signin.css";
import axios from "axios";
import { useState } from "react";
function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/addlogin1", { data }).then((res) => {
      alert(res.data.msg);
    });
  };
  return (
    <div>
      <h1
        style={{
          color: "#006aff",
          alignContent: "center",
          marginLeft: "900px",
        }}
      >
        LOGIN
      </h1>
      <form className="signin" onSubmit={login}>
        <label>email :</label>
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <label>password:</label>
        <input
          type="password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <button id="but">login</button>
      </form>
    </div>
  );
}
export default Signin;

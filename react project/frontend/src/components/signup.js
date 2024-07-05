import { useState } from "react";
import axios from "axios";
import "./signup.css";
function Signup() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addregister1", { data })
      .then((res) => alert(res.data.msg));
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
        SIGN UP
      </h1>
      <form className="signup" onSubmit={register}>
        <label>first name:</label>
        <input
          type="text"
          placeholder="enter your first name"
          value={data.firstname}
          onChange={(e) => {
            setData({ ...data, firstname: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <label>last name:</label>
        <input
          type="text"
          placeholder="enter your last name"
          value={data.lastname}
          onChange={(e) => {
            setData({ ...data, lastname: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <label>email :</label>
        <input
          type="email"
          placeholder="enter your email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <label>password:</label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <button id="but">sign up</button>
      </form>
    </div>
  );
}
export default Signup;

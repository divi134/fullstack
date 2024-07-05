import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './rl.css'; // Import your CSS file

function Login() {
  let navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    // Assuming your login endpoint is '/getsignindata', adjust it as needed
    axios.post('http://localhost:5288/signin', formdata)
      .then((res) => {
        console.log(res.data);

        toast.success("Login Successful");
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error.message);
        toast.error("Login Failed");
      });
  };

  return (
    <div id='login-container'>
      <form className='login-form'>
        <h3 id='login-heading'>Login</h3>
        <label>Username:</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formdata.username}
          onChange={handleChange}
        />
        <br />
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formdata.password}
          onChange={handleChange}
        />
        <br /><br />
        <input type="submit" id='login-submit' value='Sign In' onClick={handleSubmit} />
        <ToastContainer />
        <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </form>
    </div>
  );
}

export default Login;
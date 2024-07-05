// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './rl.css'; // Import your CSS file

function Register() {
  const [formdata, setFormdata] = useState({
    'fname': '',
    'lname': '',
    'username': '',
    'password': '',
    'Cpassword': ''
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.post('http://localhost:5288/signup', { formdata })
      .then((res) => console.log(res.data));
    toast.success("Signin Successfully");
  }

  return (
    <div id='div'>
      <form className='register-form' onSubmit={handleSignup} action='post'>
        <h3 id='head'>Register</h3>
        <label>First Name:</label>
        <br />
        <input type="text" name="fname" placeholder="Firstname" id='in' onChange={(e) => setFormdata({ ...formdata, fname: e.target.value })} />
        <br />
        <label>Last Name:</label>
        <br />
        <input type="text" name="lname" placeholder="Lastname" id='in' onChange={(e) => setFormdata({ ...formdata, lname: e.target.value })} />
        <br />
        <label>Username:</label>
        <br />
        <input type="text" name="username" placeholder="Username" id='in' onChange={(e) => setFormdata({ ...formdata, username: e.target.value })} />
        <br />
        <label>Password:</label><br />
        <input type="password" name="password" placeholder="Password" id='in' onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} />
        <br />
        <label>Confirm Password:</label>
        <br />
        <input type="password" name="Cpassword" placeholder="Password" id='in' onChange={(e) => setFormdata({ ...formdata, Cpassword: e.target.value })} />
        <br /><br />
        <input type="submit" value="SignUp" id='submit' />
        <ToastContainer />
      </form>
      <br />
    </div>
  );
}

export default Register;
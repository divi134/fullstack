// feedback from code in frontend
import React from 'react';
import './feedbacks.css'

import { useState } from 'react';
import axios from 'axios';
// import Feedback from 'react-bootstrap/esm/Feedback';
function Feedback() {
  const [formdata,setFormdata]=useState({
    'name':'',
    'email':'',
    'comments':''

})
const handle=(e)=>{
    e.preventDefault();
    console.log(formdata);
    axios.post('http://localhost:5287/addForm',{formdata}).then((res)=>console.log(res.data));
    alert("insterted")
  }
  return (
    <div className='main'>
    <footer>
      <div className="footer-content">
      <h2 id='contactus'>Contact Us</h2>
      <br></br>
        <div className="contact-info">
          <div className="contact-item">
            <label>Mail Us :</label><br/>
            <a href="mailto:publicproblems@gmail.com">publicproblems@gmail.com</a><br/><br/>
            <label>Whatsapp Us :</label><br/>
            <p>+91 7842776985</p>
          </div>
        </div>
        <div className="comment-box">
          <form onSubmit={handle}>
            <label>Name :</label><br/>
            <input type="text" name="name"placeholder="Name" id='in' className='inp' onChange={(e) =>setFormdata({...formdata,name:e.target.value})}/><br/>
            <label>Email :</label><br/>
            <input type="email" placeholder="Email" name='email' id='in' className='inp' onChange={(e) =>setFormdata({...formdata,email:e.target.value})}/><br/>
            <label>Comments :</label><br/>
            <textarea placeholder="Your message" name='comments' className='text-area' onChange={(e) =>setFormdata({...formdata,comments:e.target.value})}></textarea><br/><br/>
            <button type="submit" id='submit' className='sub'>Submit</button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Feedback;

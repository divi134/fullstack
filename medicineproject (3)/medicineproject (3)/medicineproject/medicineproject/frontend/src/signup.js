import { useState } from 'react'
import axios from 'axios'
import './signup.css';
import{Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import bb from './images/bb.jpg'
function Signup(){
    const[data,setData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    const register=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/addregister1',{data})
        .then((res)=>alert(res.data.msg))
    }
    const sin=()=>{
        window.location.href="/"
    }
    return(
        <div style={{backgroundImage: `url(${bb})`, height:900,width:1500,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
              
        <div style={{height:'100rem',width:'100rem',paddingTop:'50px'}}>
             <h1 style={{alignContent:'center', marginLeft:'630px'}}>SIGN UP</h1>
            <form className='signup' onSubmit={register} style={{textAlign:'center'}}>
                <label><h5>First Name:</h5></label>&nbsp;&nbsp;&nbsp;
                <input type="text" placeholder="Enter your first name" value={data.firstname} onChange={(e)=>{setData({...data,firstname:e.target.value})}}></input><br/><br/>
                <label><h5>Last Name:</h5></label>&nbsp;&nbsp;&nbsp;
                <input type="text" placeholder="Enter your last name" value={data.lastname} onChange={(e)=>{setData({...data,lastname:e.target.value})}}></input><br/><br/>
                <label><h5>Email:</h5></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" placeholder="Enter your email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
                <br/><br/>
                <label><h5>Password:</h5></label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}></input>
                <br/><br/>
                <button id='but'><h5>Sign Up</h5></button>
                <br/><br/>
                <button onClick={sin} id='buttn'><h5>Sign In</h5></button>
            </form>
        </div>
        </div>
    )
}
export default Signup
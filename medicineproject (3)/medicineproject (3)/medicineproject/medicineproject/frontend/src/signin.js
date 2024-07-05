import './signin.css'
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import{Navbar,Nav,Container} from 'react-bootstrap'
import bb1 from './images/bb1.avif'
function Signin(){
    const[data,setData]=useState({
        email:'',
        password:''
    })
    const fun=()=>{
        window.location.href='/signup'
    }
    const login=(e)=>{
        e.preventDefault();
       axios.post('http://localhost:5000/addlogin1',{data})
    .then((res)=>{if(res.data.msg==="login"){window.location.href='/home'}else if(res.data.msg!=="please"){alert(res.data.msg)}else{alert("please fill the details")}})
    }
    return(
        <div style={{backgroundImage: `url(${bb1})`, height:'600',width:'1200',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
              
        <div style={{height:'40rem',width:'95rem',paddingTop:'210px'}}> 
            <h1 style={{color:'black', alignContent:'center', marginLeft:'600px'}}>LOGIN</h1>
            <form className='signin' onSubmit={login} style={{textAlign:'center'}}>
                <label><h5>Email:</h5></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="Email" placeholder="Enter your email" onChange={(e)=>{setData({...data,email:e.target.value}) }}></input>
                <br/><br/>
                <label><h5>Password:</h5></label>&nbsp;&nbsp;
                <input type="Password" onChange={(e)=>{setData({...data,password:e.target.value})}}></input>
                <br/><br/>
                <button id="buttnd"><h5>Login</h5></button>
                <br/><br/>
               <button id="buttt" onClick={fun}><h5>SignUp</h5></button>
            </form>

        </div>
        </div>
    )
}
export default Signin
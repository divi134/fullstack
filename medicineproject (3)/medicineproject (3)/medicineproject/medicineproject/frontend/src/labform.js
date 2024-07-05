import axios from "axios";
import { useState } from "react";
import './form.css'
function Labform()
{
    const[formdata,setform]=useState({
        'firstname':'',
        'lastname':'',
        'age':'',
        'dob':'',
        'gender':'',
        'address':'',
        'phonenumber':'',
        'name':'',
        'organisation':'',
        'address1':'',
        'number':'',
        'testname':'',


    })
    const submitfunction=(e)=>
    {
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/pateintadd',{formdata})
        .then((res)=>{
        alert(res.data.msg)})
    }
    
    return (
        <>
        <div className="form">
           <center><h1>LAB TEST DETAILS</h1></center> 
        <form onSubmit={submitfunction} style={{border:2}}>
          <div style={{height:20 ,paddingTop:15}}>
          <div style={{float:"left",width:600}}> </div>  
         <div style={{float:"right",width:600,paddingLeft:15}}> <h5>Requested Details</h5></div>
          </div>
                    
             <h5 >Patient Details</h5>
            <div className="pateint">
            <label><h6>First Name :</h6></label>&nbsp;
            <input  type="text" name="firstname" placeholder="Enter Firstname"  onChange={(e)=>setform({...formdata,firstname:e.target.value})}></input>
            <br></br><br></br>
            <label><h6>Last Name:</h6></label>&nbsp;
            <input type="text" name="lastname" placeholder="Enter Lastname" onChange={(e)=>setform({...formdata,lastname:e.target.value})}></input>
            <br></br><br></br>
            <label><h6>Age :</h6></label>&nbsp;
            <input type="text" name="age"  placeholder="Enter Age" onChange={(e)=>setform({...formdata,age:e.target.value})}></input>
            <br></br><br></br>
            <label><h6>DOB :</h6></label>&nbsp;
            <input type="date" name="dob"  placeholder="Enter Date of Birth" onChange={(e)=>setform({...formdata,dob:e.target.value})}></input>
            <br></br><br></br>
            <label><h6>Gender :</h6></label>&nbsp;
            <input type="radio" name="gender"  value="female" onChange={(e)=>setform({...formdata,gender:e.target.value})}></input>
            <label><h6>Female</h6></label>&nbsp;
            <input type="radio" name="gender" value="male"   onChange={(e)=>setform({...formdata,gender:e.target.value})}></input>
            <label><h6>Male</h6></label>&nbsp;
            <br></br><br></br>
            <label><h6>Address:</h6></label>&nbsp;
            <input type="text" name="address"  placeholder="Enter Present Address" onChange={(e)=>setform({...formdata,address:e.target.value})}></input>
            <br></br><br></br>
            <label><h6>Phone Number </h6></label>&nbsp;
            <input type="text" name="phonenumber"  placeholder="Enter Phone Number" onChange={(e)=>setform({...formdata,phonenumber:e.target.value})}></input>
            <br></br><br></br>
            </div>
            <div className="pateint2">
            <label><h6>Name :</h6></label>&nbsp;
            <input type="text" name="name"  placeholder="Enter Name" onChange={(e)=>setform({...formdata,name:e.target.value})}></input>
            <br></br><br></br>
            <label><h6>Organisation :</h6></label>&nbsp;
            <input type="text" name="organisation"  placeholder="Enter Organisation" onChange={(e)=>setform({...formdata,organisation:e.target.value})}></input>
            <br></br><br></br>&nbsp;
            <label><h6>Address :</h6></label>&nbsp;
            <input type="text" name="address1"  placeholder="Enter Present Address" onChange={(e)=>setform({...formdata,address1:e.target.value})}></input>
            <br></br><br></br>&nbsp;
            <label><h6>Telephone number :</h6></label>&nbsp;&nbsp;
            <input type="text" name="number"  placeholder="Enter Telephone Number" onChange={(e)=>setform({...formdata,number:e.target.value})}></input>
            <br></br>
            </div>
        
         <h5 style={{marginLeft:650}}>Test Name</h5>
         <div className="pateint3">
     
         <input type="radio"  name="testname" value="Blood test" onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Blood test</h6></label><br></br>
         <input type="radio"  name="testname" value="Vitamin b12" onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Vitamin b12</h6></label><br></br>
         <input type="radio"  name="testname" value="Home Drug test" onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Home Drug test test</h6></label><br></br>
         <input type="radio"  name="testname"  value="Vitamin D"onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Vitamin D test</h6></label><br></br>
         <input type="radio"  name="testname" value="Thyroid" onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Thyroid test</h6></label><br></br>
         <input type="radio"  name="testname" value="Paternity" onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Paternity test</h6></label><br></br>
         <input type="radio"  name="testname" value="Allergic test" onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Allergic test</h6></label><br></br>
         {/* <input type="radio"  name="testname"  value="Tumor marker"onChange={(e)=>setform({...formdata,testname:e.target.value})}></input>
         <label><h6>Tumor Marker</h6></label><br></br> */}
         </div>
         <br>
         </br>
          <center> <button style={{height:'3rem', width:'10rem',borderRadius:'2rem',border:'2px solid grey',backgroundColor:"lightblue",boxShadow:"1px 1px 1px 2px lightblue"}}><h5>Submit</h5></button></center>
        </form>
        </div>
        </>
    )
}
export default Labform;
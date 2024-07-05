import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import signups from "./schemas/signups.js";
import lab from "./schemas/lab.js";
import contacts from "./contact.js";


const app=express();
app.use(bodyParser.json());
app.use(cors());
const port=5000;
//bhaskaralakshmi07:Ki2OJpWasg7ttLEh
mongoose.connect('mongodb+srv://bhaskaralakshmi07:Ki2OJpWasg7ttLEh@cluster0.5gzqgxp.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{app.listen(port,()=>{console.log(`server connected to ${port}`)})})
.then(()=>{console.log("connected to database")})
.catch((err)=>console.log(err));
// const login1=new login({
//     email,password
// })

//==============================create  register=========================================

app.post('/addregister1',async(req,res,next)=>{
    
    const{firstname,lastname,email,password}=req.body.data;
    let k
    try{
        if(firstname===''||lastname===''|| email===''||password==='')
        {
            return res.send({msg:"please fill the details"})
        }
        else{
        const hello= await signups.findOne({email:email})
        if(hello)
        {
             console.log(hello)
              k="already email exits"
        }
        else{
            const register1=new signups({
                firstname,lastname,email,password
            })
            register1.save();
            k="Successfully Registered...!"
            
        }
        return res.send({msg:k})
     }
    }
    catch(err){
        console.log(err);
    }
    return res.send({msg:k})

})

//=======================================to check given email and password is in database or not ==================================
app.post('/addlogin1',async(req,res,next)=>{
    const {email,password}=req.body.data;
    let p;
    try{
        if(email==='' || password==='')
        {
            return res.send({msg:"please"})
        }
        else{
        const hi=await signups.findOne({email:email})
        console.log(hi)
        if(hi===null)
        {
          p="Person is not registered."
        }
        else if(hi && password==hi.password)
        {
                 p="login"
        }
        else{
                p="your email or password is wrong"
        }
        return res.send({msg:p})
       }
    }
    catch(err)
    {
        return res.send(err)
    }


})
        
//=================================================================================
app.post('/pateintadd',(req,res,next)=>{
    const {firstname,lastname,age,dob,gender,address,phonenumber,name,organisation,address1,number,testname}=req.body.formdata
    var login1=new lab(
      {
        firstname,
        lastname,
        age,
        dob,
        gender,
        address,
        phonenumber,
        name,
        organisation,
        address1,
        number,
        testname,
      })
     
      
      try{
        
        login1.save();
        console.log(req.body)
        return res.send({msg:"Submitted Successfully...!",result:login1})
      }
      catch(err)
      {
        console.log("please fill ");
      }
      
  
  })
  app.post('/contactadd',(req,res,next)=>{
    const {fullname1,email1,message}=req.body.contactdata;
    const c1=new contacts(
      {
        fullname1,
        email1,
        message
      })
      
      try{
      
        c1.save();
      }
      catch(err)
      {
        console.log(err);
      }
      return res.send({msg:"Thank you for contacting us",result:c1})

})
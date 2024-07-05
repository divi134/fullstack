import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";  //npm i body-parser
import cors from "cors";  //npm i cors
// const bodyParser = require('body-parser')
// const cors = require(cors)
import student from "./models/stuudent.js";
// const student = require('./models/student');
import nodemailer from "nodemailer";
import multer from "multer";

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://divyasri:t1XQ1NlFg8SSF2k4@cluster0.xxu8rzb.mongodb.net/driveready?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() =>
    console.log("Connected to Database & Listining to localhost 5000")
    )
    .catch((err) => console.log(err));
 //app.listen(5000)
//     app.post('/adddata', (req,res,next)=>{
//     console.log(req.body.formdata)
//     // perform action
//     res.send("Success")
// })
// app.use('/api', (req, res, next)=>{
//     res.send("Hello Divya.........!")
// })
app.listen(4444)
// app.post('/addstud', (req, res, next)=>{
//     console.log(req.body)
//     const {name, rollno, college, branch} = req.body;
//     // res.send({message:"success"})
//     //res.send({rollno:req.body.rollno})
//     const stud = new student({
//         name,
//         rollno,
//         college,
//         branch
//     })
//     stud.save()
//     return res.status(201).json({stud})
// })
//backdnc/api
//http://localhost:5000/api

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/addstud',upload.single('myfile'),async(req,res,next)=>{
    //res.send({message:"success"})
    const profile = (req.file) ? req.file.fieldname : null
    //console.log(req.body.formdata)
    console.log(req.body)
    const {name,rollno,college,branch} =req.body;
    const stud=new student({
        name,
        rollno,
        college,
        branch,
        profile
    })
  stud.save()
  try{
    stud.save()
  }catch(err)
  {
    console.log(err);
  }
  return res.send({msg:"inserted",result:stud})//for displaying message
  
})

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'divyasri8130@gmail.com',
    pass: 'qdrx ugvo omcg ljex'
  }
});

var mailOptions = {
  from: 'divyasri8130@gmail.com',
  to: 'divyasri14444@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.get('/getstudent', async(req, res, next)=>{
  let studentdata
  try{
    studentdata = await student.find()
  }
  catch(err){
    console.log('err')
  }
  if(!studentdata){
    console.log("No students found")
  }
  return res.status(200).json({studentdata})
})

//delete the record by id
app.delete('/deleteuser/:id', async (req, res, next)=>{
  const _id = req.params.id
  let studentdata;
  try{
      studentdata = await student.findByIdAndDelete(_id);
  }catch(err){
      return console.log(err)
  }
  if(!studentdata){
      return res.status(400).json({message:"Unable to delete the user."})
  }
  return res.status(200).json({messgae:"Succeesfully deleted."})
})

app.get('/getstudentbyid/:id', async(req, res, next)=>{
  let studentdata
  const _id=req.params.id
  try{
    studentdata = await student.findById(_id)
    console.log(studentdata)
  }
  catch(err){
    console.log('err')
  }
  if(!studentdata){
    console.log("No students found")
  }
  return res.status(200).json({studentdata})
})

app.put('/updatestudent/:id', async(req, res, next)=>{
  // let studentdata
  const _id=req.params.id
  const {name, rollno, college, branch} = req.body.formdata
  let stud;
  try{
    stud = await student.findByIdAndUpdate(_id,
      {name,
      rollno,
      college,
      branch})
  }
  catch(err){
    console.log('err')
  }
  return res.status(200).json({studentdata})
})


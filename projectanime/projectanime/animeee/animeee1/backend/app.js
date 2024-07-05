import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import product from "./models/product.js";
import bodyParser from "body-parser";
import cors from 'cors'
import userdt from './signindata.js';
import nodemailer from "nodemailer"
// const nodemailer = require("nodemailer");
import send from "./sendmail.js";
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://anime:Anime123@cluster0.gkjep37.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
.then(() => app.listen(5288))
.then(() =>
console.log("Connected to Database & Listining to localhost 5288")
)
.catch((err) => console.log(err));

//products

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})


const upload = multer({ storage: storage })
//add product 
app.post("/addproduct",upload.single("myfile"),async(req, res, next)=>{
  const productpic=(req.file)? req.file.filename:null
  //console.log(req.body.formdata)
  const {title,description,category} =req.body
  const prod = new product({
      title,
      description,
      category,
      productpic,
    })
  try{
      prod.save()//for saving the data into the database
      return res.status(200).json({ message: 'Product added to cart successfully' });
  }catch(err){
         return res.status(400).json({message:"not uploaded"})
  }      
})

app.get('/getallproduts',async(req,res,next)=>{
  let productsdata; 
  try{
      productsdata=await product.find();
  }catch(err){
      console.log(err);
  }
  if(!productsdata){

      return res.status(404).json({message:"no student found."})

  }
  return res.status(200).json(productsdata)
})

app.post('/getproductbyid/',async(req,res)=>{
  const item_id= req.body.item
  console.log(item_id)
  try{
    var item = await product.find({title:item_id})
    console.log(item)
    if(!item)
    {
      return res.status(404).json({message:"no data found"})
    }
    return res.send(item).status(200)
  }
  catch(err)
  {
    console.log(err)
  }
})



app.use('/images',express.static('public/images'))



// ------------------feedback form ------------------------
app.post("/addForm",(req,res,next)=>{
  console.log(req.body.formdata)
  const {name,email,comments}= req.body.formdata
  const smail = new send({
      name,
      email,
      comments
  })
  try{
      smail.save()
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'krishnakoushikchowdary@gmail.com',
            pass: 'zjpa vedu hrga eqyf'
          }});
        
        var mailOptions = {
          from: 'krishnakoushikchowdary@gmail.com',
          to: email,
          subject: 'sending mails to rectify problems to be solved',
          text: 'Thanks '+name+' for your valuable Feedback we will soon recify your problem. '+comments
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        
  }
  catch{
      alert("Error")
      // window.location.reload()
  }
  return res.status(200).json({msg:"Inserted",result:smail})
})




// -----------------------register page-------------------------

app.post('/signup',(req,res,next)=>{
console.log(req.body.formdata);
const {fname,lname,username,password,Cpassword}=req.body.formdata;
const udt =new userdt({
    fname,
    lname,
    username,
    password,
    Cpassword
})
try{
    udt.save();
}
catch(err){
    console.log(err);
}
return res.send({msg:"inserted",result:udt});
})



// -----------------------------login code---------------------------

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
console.log(username)
  try {
    const user = await userdt.findOne({ username, password });

    if (!user) {
      return res.status(404).json({ error: 'Invalid username or password' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
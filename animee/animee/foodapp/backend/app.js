import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import product from "./models/product.js";
import bodyParser from "body-parser";
import cors from 'cors'
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
app.use('/images',express.static('public/images'))

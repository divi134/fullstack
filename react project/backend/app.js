import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import signups from "./schemas/signups.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 5000;
mongoose
  .connect(
    "mongodb+srv://priya387sk:4xCzb4aPOTgVpfbT@cluster0.v1q8o1j.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("server connected to ${port}");
    });
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));
// const login1=new login({
//     email,password
// })

//==============================create  register=========================================

app.post("/addregister1", async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body.data;
  let k;
  try {
    const hello = await signups.findOne({ email: email });
    if (hello) {
      console.log(hello);
      k = "already email exits";
    } else {
      const register1 = new signups({
        firstname,
        lastname,
        email,
        password,
      });
      register1.save();
      k = "inserted";
    }
  } catch (err) {
    console.log(err);
  }
  return res.send({ msg: k });
});

//=======================================to check given email and password is in database or not ==================================
app.post("/addlogin1", async (req, res, next) => {
  const { email, password } = req.body.data;
  let p;
  try {
    const hi = await signups.findOne({ email: email }, { password: password });
    if (hi) {
      p = "sucessfully login";
    } else {
      p = "your email or password is wrong";
    }
    return res.send({ msg: p });
  } catch (err) {
    console.log(err);
  }
});

import mongoose from "mongoose";
let contacts=new mongoose.Schema({
    fullname1:{
        type:String,
        requires:true
    },
    email1:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
  
   
   
})
export default mongoose.model('contacts',contacts);
import mongoose from "mongoose";
let signups=new mongoose.Schema({
    firstname:{
        type:String,
        requires:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
export default mongoose.model('signups',signups);
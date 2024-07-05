// schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ptext=new Schema({
    comments:{
        type:String,
        required:true
    }
});

export default mongoose.model("comm",ptext);
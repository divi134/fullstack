//schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;
let studentSchema = new Schema({
    name : {
        type: String,
        // required: true
    },
    rollno: {
        type: String,
        // required: true
    },
    college : {
        type: String,
        // required: true
    },
    branch:{
        type: String,
        //required: true
    },
    profile:{
        type: String,
    }
}); 
export default mongoose.model("Students", studentSchema);
//export default mongoose.model(Collectionname, schemavariablename);

import mongoose from "mongoose";
let lab=new mongoose.Schema({
    firstname:{
        type:String,
        requires:true
    },
    lastname:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phonennumber:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    organisation:{
        type:String,
        require:true
    },
    address1:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    testname:{
        type:String,
        require:true
    }
})
export default mongoose.model('lab',lab);
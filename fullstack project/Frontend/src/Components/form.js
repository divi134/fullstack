// import { useState } from "react"
// import axios from "axios"
// const Form=()=>{
//     const [formdata, setFormdata]=useState({
//         'fname':'',
//         'lname':'',
//         'email':''
//     })
//     const handlesubmit=(e)=>{
//         e.preventDefault();
//         console.log(formdata)
//         axios.post('http://localhost:5000/api',{formdata}).then((res)=>console.log(res.data))
//     }
//     return(
//         <div>
//             <h1>Form</h1>
//             <form onSubmit={handlesubmit}>
//                 <label>First Name</label>
//                 <input type="text" name="fname" onChange={(e) =>setFormdata({...formdata,fname:e.target.value})}></input>
//                 <br/>
//                 <label>Last Name</label>
//                 <input type="text" name="lname" onChange={(e) =>setFormdata({...formdata,lname:e.target.value})}></input>
//                 <br/>
//                 <label>Email</label>
//                 <input type="email" name="email" onChange={(e) =>setFormdata({...formdata,email:e.target.value})}></input>
//                 <br/>
//                 {/* <label>Mobile Number</label>
//                 <input type="number" name="" onChange={(e) =>setFormdata({...formdata,email:e.target.value})}></input>
//                 <br/> */}
//                 <input type="submit" value="submit"></input>
//             </form>
//         </div>
//     )
// }
// export default Form

import { useState } from "react"
import axios from "axios"
const Form=()=>{
    const [formdata, setFormdata]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':'',
        'profilePic':''
    })
    
    const handlesubmit=(e)=>{
        const Inputfield = new FormData()
        Inputfield.append('myfile', formdata.profilePic,formdata.profilePic.name)
        Inputfield.append('name',formdata.name)
        Inputfield.append('rollno',formdata.rollno)
        Inputfield.append('college',formdata.college)
        Inputfield.append('branch',formdata.branch)
        e.preventDefault();
        console.log(Inputfield)
        // axios.post('http://localhost:5000/addstud',{formdata}).then((res)=>console.log(res.data))
        // alert('inserted')
        axios.post('http://localhost:5000/addstud',Inputfield).then((res)=>console.log(res.body))
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) =>setFormdata({...formdata,name:e.target.value})}></input>
                <br/>
                <label>Rollno</label>
                <input type="text" name="rollno" onChange={(e) =>setFormdata({...formdata,rollno:e.target.value})}></input>
                <br/>
                <label>College</label>
                <input type="text" name="college" onChange={(e) =>setFormdata({...formdata,college:e.target.value})}></input>
                <br/>
                <label>Branch</label>
                <input type="text" name="branch" onChange={(e) =>setFormdata({...formdata,branch:e.target.value})}></input>
                <br/>
                <label>Upload</label>
                <input type="file" name="myfile" onChange={(e) =>setFormdata({...formdata,profilePic:e.target.files[0]})}></input>
                <br/>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}
export default Form
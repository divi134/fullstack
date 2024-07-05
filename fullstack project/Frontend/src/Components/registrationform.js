import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
const RegistrationForm=()=>{
    const [formdata, setFormdata]=useState({
        'name':'',
        'rollno':'',
        'email':'',
    })
    const {id} = useParams()
    //console.log(id)
    useEffect(() => {
        axios.get('http://localhost:5000/getstudentbyid/'+id) // Replace with your API endpoint
          .then((res) => {
            console.log(res.data)
            setFormdata(res.data.studentdata);
          })
          .catch((err)=>console.log(err))
        },[])
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addstud',{formdata}).then((res)=>console.log(res.data))
        alert('inserted')
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
                <label>Email</label>
                <input type="email" name="email" onChange={(e) =>setFormdata({...formdata,college:e.target.value})}></input>
                <br/>
                {/* <label>Branch</label>
                <input type="text" name="branch" onChange={(e) =>setFormdata({...formdata,branch:e.target.value})}></input>
                <br/> */}
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}
export default RegistrationForm
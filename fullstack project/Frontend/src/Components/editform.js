import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
const EditForm=()=>{
    const [formdata, setFormdata]=useState({
        'name':'',
        'rollno':'',
        'college':'',
        'branch':''
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
        axios.put('http://localhost:5000/updatestudent/'+id,formdata)
        .then((res)=>console.log(res.data))
        alert('inserted')
    }
    return(
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formdata.name} onChange={(e) =>setFormdata({...formdata,name:e.target.value})}></input>
                <br/>
                <label>Rollno</label>
                <input type="text" name="rollno" value={formdata.rollno} onChange={(e) =>setFormdata({...formdata,rollno:e.target.value})}></input>
                <br/>
                <label>College</label>
                <input type="text" name="college" value={formdata.college} onChange={(e) =>setFormdata({...formdata,college:e.target.value})}></input>
                <br/>
                <label>Branch</label>
                <input type="text" name="branch" value={formdata.branch} onChange={(e) =>setFormdata({...formdata,branch:e.target.value})}></input>
                <br/>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}
export default EditForm
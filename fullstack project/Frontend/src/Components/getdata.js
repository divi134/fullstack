import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Getdata() {
    const [student, setStudent] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/getstudent') // Replace with your API endpoint
        .then((response) => {
          setStudent(response.data.studentdata);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    const Deletestu=(id)=>{
        console.log(id)
        axios.delete('http://localhost:5000/deleteuser/'+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload();
        })
        .catch(err=>{console.log(err)})
    }
    return(
        <div>
            <h1>Studentdata</h1>
            <table border={1} align="center" cellSpacing={0}>
                <tr>
                    <th>S.No </th>
                    <th>Name </th>
                    <th>Rollno </th>
                    <th>College </th>
                    <th>Branch </th>
                    <th colSpan={2}>Actions</th>
                </tr>
                {student.map((ele, index,arr) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.college}</td>
                        <td>{ele.branch}</td>
                        <td><Link to={`/editform/${ele._id}`}> <button>Edit</button></Link></td>
                        <td><button onClick={()=>Deletestu(ele._id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default Getdata
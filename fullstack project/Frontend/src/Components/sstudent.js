const Student=(props)=>{
    return(
       
             <tr>
            <td>{(props.index)+1}</td>
            <td>{props.name}</td> 
            <td>{props.rollno}</td>
            <td>{props.branch}</td>
            <td>{props.campus}</td>
        </tr>
        
    )
}
export default Student
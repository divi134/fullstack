import Person from "./person"
function Studentlist(){
    let obj=[
        {
            name:'Divya',
            rollno:'531',
            branch:'CSE',
            campus:'ACET'
        },
        {
            name:'Ramya',
            rollno:505,
            branch:'CSE',
            campus:'ACET'
        },
    ]
    return(
        <>
        {
             obj.map((ele)=>
                {
                    return (<Person name={ele.name} rollno={ele.rollno} campus={ele.campus} branch={ele.branch} />)
                    //return (<p>{ele.name} {ele.rollno} {ele.campus} {ele.branch}</p>)
                })
            }
        </>
    )
}
export default Studentlist
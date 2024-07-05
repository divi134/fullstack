import Student from "./sstudent"
function Studenttable(){
    let student=[
        {
            name:'Divya',
            rollno:531,
            branch:'CSE',
            campus:'ACET'
        },
        {
            name:'Ramya',
            rollno:505,
            branch:'CSE',
            campus:'ACET'
        },
        {
            name:'Sravya',
            rollno:524,
            branch:'CSE',
            campus:'ACET'
        },
        {
            name:'Satya',
            rollno:532,
            branch:'CSE',
            campus:'ACET'
        },
    ]
    return(
        <div>
            <table border={1} cellSpacing={0} align="center">
                <tr>
                    <th>S.No</th><th>Name</th><th>Rollno</th><th>Branch</th><th>Campus</th>
                </tr>
                {
                    student.map((ele,i)=>{
                        return(<Student index={i} name={ele.name} rollno={ele.rollno} branch={ele.branch} campus={ele.campus}/>)
                    })
                }
            </table>
        </div>
    )
}
export default Studenttable
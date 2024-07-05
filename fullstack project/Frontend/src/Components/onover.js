import Autumn from "../wal.jfif"
const Onover=()=>{
    const handleImage=(e)=>{
        //document.write("Overed")
        e.target.style.height='400px'
        e.target.style.width='600px'
    }
    const handle=(e)=>{
        e.target.style.height='50px'
        e.target.style.width='100px'
    }
    return(
        <div>
            <h1>Image</h1>
            <img src={Autumn} alt="" onMouseOver={handleImage} onMouseOut={handle} height={600} width={400}/>
           
        </div>
    )
}
export default Onover;
function Click(){
    const handleClick=()=>{
        document.write("click")
    }
    const handleClick2=(name)=>{
        alert(name)
    }
    const handleInput=(a)=>{
        console.log(a.target.value)
    }
    return(
        <div>
            <button onClick={() => {alert('clicked')}} >Click Me</button>
            <br/>
            <button onClick={handleClick}>Click here</button>
            <button onClick={()=>handleClick2('ramya')}>Click here</button>
            <button onMouseOver={handleClick}>over me</button>
            <br/>
            <input type="text" name="firstname" onChange={handleInput}/>
        </div>
    )
}
export default Click;
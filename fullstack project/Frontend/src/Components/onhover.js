function Onhover(){
    const background=()=>{
        document.body.style.backgroundColor='lightblue'
    }
    return(
        <div>
            <h1>ONHOVER</h1>
            <button onMouseOver={background}>Click here to change color</button>
        </div>
    )
}
export default Onhover
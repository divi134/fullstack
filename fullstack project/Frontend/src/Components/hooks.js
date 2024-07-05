import bulbon from "../orange.jfif"
import bulboff from "../orangeslices.jpg"
import { useState } from "react";
function Hooks()
{
    const [light,wiring]=useState(false)
    return(
        <div>
            <button onClick={()=>wiring(true)}>ON</button>
            <button onClick={()=>wiring(false)}>OFF</button>

            {
                light===false? <img src={bulboff} alt="ghh" />:<img src={bulbon} alt="hg"/>
            }
        </div>
    )
}
export default Hooks;
import { Link } from "react-router-dom";
function Menu(){
    return(
        <div>
          <Link to="/signin">signin</Link>  |
          <Link to="/signup">signup</Link>
        </div>
    )
}
export default Menu;
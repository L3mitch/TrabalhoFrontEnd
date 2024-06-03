import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <span style= {{padding: '8px'}}><link to={'/'}>Home</Link> </span>
            <span style= {{padding: '8px'}}><link to={'/login'}>login</Link> </span>
        </div>
    )
}
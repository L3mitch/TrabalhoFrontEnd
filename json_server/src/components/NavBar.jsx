import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <span style= {{padding: '8px'}}><Link to={'/'}>Home</Link> </span>
            <span style= {{padding: '8px'}}><Link to={'/EditForm'}>Edit</Link> </span>
            <span style= {{padding: '8px'}}><Link to={'/Products'}>Products</Link> </span>
        </div>
    )
}
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <span style={{padding: '8px'}}><Link to={'/'}>Home</Link> </span>
        </div>
    )
}
import { Link } from "react-router-dom";
import './NavBar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <span className="link">
                <Link to="/" className="linkText">Home</Link>
            </span>
        </div>
    );
}
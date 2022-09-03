import { React } from "react";
import { Link } from "react-router-dom"
import { useState } from "react";

const NavBar = () => {

    const [expandNavbar, setExpandNavBar] = useState(false);

    return (
        <nav className="navbar" id={expandNavbar ? "open" : "close"}>

            <div className ="toggleButton">
                <button onClick={() => setExpandNavBar((prev) => !prev)}> </button>
            </div>

            <ul className="links">
                <li><strong><Link to="/"> Home </Link></strong></li>
                <li><strong><Link to="/projects"> Projects </Link></strong></li>
                <li><strong><Link to="/experience"> Experience </Link></strong></li>
                <li><strong><Link to="/contact"> Contact Me </Link></strong></li>
            </ul>
        </nav>
    );

}

export default NavBar;
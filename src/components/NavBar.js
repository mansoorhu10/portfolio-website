import { React, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { GitHub, LinkedIn, Reorder } from "@mui/icons-material";


const NavBar = () => {

    const [expandNavbar, setExpandNavBar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location]);

    return (
        <nav className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavBar((prev) => !prev)}><Reorder /></button>
            </div>

            <ul className="links">
                <div className="internal">
                    <li><strong><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link")}> Home </NavLink></strong></li>
                    <li><strong><NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "link")}> Projects </NavLink></strong></li>
                    <li><strong><NavLink to="/internships" className={({ isActive }) => (isActive ? "active-link" : "link")}> Internships </NavLink></strong></li>
                    <li><strong><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "link")}> Contact Me </NavLink></strong></li>
                </div>
                <div className="external">
                    <li><div className="logo-child"><a href="https://github.com/mansoorhu10" target={"_blank"} rel="noreferrer" className="logo-link"><GitHub /></a></div></li>
                    <li><div className="logo-child"><a href="https://www.linkedin.com/in/mansoor-syed-dev" target={"_blank"} rel="noreferrer"><LinkedIn /></a></div></li>
                </div>
            </ul>
        </nav>
    );

}

export default NavBar;
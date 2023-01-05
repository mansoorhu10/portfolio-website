import { React } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";


const NavBar = () => {

    const [expandNavbar, setExpandNavBar] = useState(false);

    return (
        <nav className="navbar" id={expandNavbar ? "open" : "close"}>
            
            <div className="toggleButton">
                <button onClick={() => setExpandNavBar((prev) => !prev)}> EXPAND BUTTON </button>
            </div>

            <ul className="links">
                <li><strong><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link")}> Home </NavLink></strong></li>
                <li><strong><NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "link")}> Projects </NavLink></strong></li>
                <li><strong><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "link")}> Contact Me </NavLink></strong></li>
                <div className="vl">
                    <motion.div whileHover={{ backgroundColor: "#A70B0B", }} className="logo-child"><a href="https://github.com/mansoorhu10" target={"_blank"} rel="noreferrer" className="logo-link"><img alt="GitHub Logo" src="/logos/github-logo.png"></img></a></motion.div>
                    <motion.div whileHover={{ backgroundColor: "#A70B0B", }} className="logo-child"><a href="https://www.linkedin.com/in/mansoor-syed-83b45b23b" target={"_blank"} rel="noreferrer"><img alt="LinkedIn Logo" src="/logos/linkedin-logo.png"></img></a></motion.div>
                </div>
            
            </ul>
            
            
        </nav>
        
    );

}

export default NavBar;
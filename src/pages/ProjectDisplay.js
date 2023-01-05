import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const logoAlt = project.name + " Logo";
    const imageOneAlt = "An image displaying what " + project.name + " looks like";

    return  (
        <div className="project">

            <motion.div
                whileHover={{backgroundColor: "#A70B0B"}}
            ><h2><strong><NavLink to="/projects" className="back-button"> &larr; Back </NavLink></strong></h2></motion.div>
            
            <div className="project-article">
                <div className="project-name">
                    <img src={project.logo} alt={logoAlt} className="project-logo" />
                    <h1>{project.name}</h1>
                </div>

                <hr />

                <p className="project-writing">
                    <div className="description-image">
                        <img className="image-one" src={project.imageOne} alt={imageOneAlt}></img>
                        
                        <div className="project-skills">
                            <b>Skills:</b> {project.skills}
                        </div>
                    </div>    

                    <br />

                    <div className="project-description">
                        {project.description}
                    </div>

                    <br />

                    <motion.div whileHover={{ backgroundColor: "#A70B0B", }} className="logo-child"><a href={project.link} target={"_blank"} rel="noreferrer"><img alt="GitHub Logo" src="/logos/github-logo.png"></img></a></motion.div>

                </p>
            </div>
        </div>
    )
}

export default ProjectDisplay;
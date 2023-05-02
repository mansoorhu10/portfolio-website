import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { GitHub } from "@mui/icons-material";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    const logoAlt = project.name + " Logo";
    const imageOneAlt = "An image displaying what " + project.name + " looks like";

    return  (
        <div className="project">

            <div>
                <h2><strong><NavLink to="/projects" className="back-button"> &larr; Back </NavLink></strong></h2>
            </div>
            
            
            <motion.div 
                initial={{opacity: 0,}}
                animate={{opacity: 1,}}
                transition={{duration: 0.5}}

            className="project-article">
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
                        <p>{project.descriptionOne}</p>
                    </div>

                    <br />

                    <div className="description-image">
                        <img className="image-one" src={project.imageTwo} alt={imageOneAlt}></img>
                    </div>

                    <div className="project-description">
                        <p>{project.descriptionTwo}</p>
                    </div>

                    <br />

                    <div className="source-code">
                        <p className="source-text">
                            <b>View the project source code here:</b> 
                        </p>
                        <div className="logo-child"><a href={project.link} target={"_blank"} rel="noreferrer"><GitHub /></a></div>
                    </div>

                </p>
            </motion.div>
        </div>
    )
}

export default ProjectDisplay;
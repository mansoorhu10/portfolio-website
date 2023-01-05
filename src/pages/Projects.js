import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { motion } from "framer-motion";

const Projects = () => {

    return (
        <div className="projects-page">
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            
            className="project-list">
                {ProjectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} logo={project.logo} skills={project.skills} imageOne={project.imageOne} description={project.description} link={project.link} />
                })}
            </motion.div>

        </div>
    );

}

export default Projects;
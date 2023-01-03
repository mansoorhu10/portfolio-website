import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

const Projects = () => {

    return (
        <div className="projects-page">
            <div className="project-list">
                {ProjectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} logo={project.logo} skills={project.skills} imageOne={project.imageOne} description={project.description} link={project.link} />
                })}
            </div>

        </div>
    );

}

export default Projects;
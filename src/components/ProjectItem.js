import React from "react";

function ProjectItem({ logo, name }) {
    return (
        <div className="project-item">
            <div style={{ backgroundImage: `url(${logo})` }} className="project-logo" />
            <h4 className="project-title"> {name} </h4>
        </div>
    )
}

export default ProjectItem;
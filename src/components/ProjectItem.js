import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ logo, name, id }) {
    const navigate = useNavigate();
    return (
        <div className="project-item" onClick={() => {
            navigate("/projects/" + id);
        }}>
            <div style={{ backgroundImage: `url(${logo})` }} className="project-logo" />
            <h4 className="project-title"> {name} </h4>
        </div>
    )
}

export default ProjectItem;
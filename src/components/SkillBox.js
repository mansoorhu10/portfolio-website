import React from "react";

function SkillBox({key, skill}) {
    return (
        <div key={key} className="skill-box">
            {skill}
        </div>
    )
}

export default SkillBox;
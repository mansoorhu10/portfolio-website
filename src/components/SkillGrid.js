import React from "react";
import SkillBox from "./SkillBox";
import { SkillsList } from "../helpers/SkillsList";

function SkillGrid() {
    return(
        <div className="skill-grid">
            {SkillsList.map((thisSkill) => {
                return <SkillBox key={thisSkill.key} skill={thisSkill.skill} />
            })}
        </div>
    )
}

export default SkillGrid;
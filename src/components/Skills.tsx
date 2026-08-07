import { skillCategories } from "../constants/appData"
import { capitalizeFirstLetter } from "../utils/utils"

import type { SectionProps, Skill } from "../types/types"

function Skills({ id }: SectionProps) {
  return (
    <div id={id} data-testid={id} className="skills">
      <h2 className="prompt">
        <span className="prompt-symbol" aria-hidden="true">
          $
        </span>{" "}
        ls ./skills
      </h2>
      {Object.entries(skillCategories).map(([categoryName, categoryData]) => (
        <div key={categoryName} className="skill-category">
          <h3 className="category-name">{categoryName}</h3>
          <div className="skills-list">
            {categoryData.skills.map((skill: Skill) => (
              <div
                key={skill.name}
                data-testid={`skill-${skill.name}`}
                className={`skill-item${skill.isCore ? " skill-item-core" : ""}`}
              >
                <span className="skill-name">
                  {capitalizeFirstLetter(skill.name)}
                </span>
                <span className="skill-years">{skill.years} years</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills

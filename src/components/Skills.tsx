import { skillCategories } from "../constants/appData"
import { capitalizeFirstLetter } from "../utils/utils"

import type { SectionProps, Skill } from "../types/types"

function Skills({ id }: SectionProps) {
  const categories = Object.entries(skillCategories)
  const totalSkills = categories.reduce(
    (sum, [, categoryData]) => sum + categoryData.skills.length,
    0,
  )

  return (
    <div id={id} data-testid={id} className="skills">
      <h2 className="prompt">
        <span className="prompt-symbol" aria-hidden="true">
          $
        </span>{" "}
        cat ./skills/pipeline.yml
      </h2>
      <p className="pipeline-caption">
        # pipeline.yml — {categories.length} stages ·{" "}
        <b>{totalSkills} skills</b> total
      </p>

      <div className="stage-rail">
        <div className="rail-line" aria-hidden="true">
          <span className="rail-pulse" />
        </div>

        {categories.map(([categoryName, categoryData], index) => {
          const stageNumber = String(index + 1).padStart(2, "0")

          return (
            <div
              key={categoryName}
              data-testid={`stage-${categoryName}`}
              className="stage"
            >
              <div className="stage-node" aria-hidden="true">
                {stageNumber}
              </div>
              <div className="stage-body">
                <div className="stage-head">
                  <span className="stage-kicker">
                    stage {stageNumber} · {categoryData.kicker}
                  </span>
                  <h3 className="stage-name">
                    <span aria-hidden="true"># </span>
                    {categoryName}
                  </h3>
                  <span className="stage-status">
                    <span aria-hidden="true">✓ </span>
                    <b>{categoryData.skills.length}</b> skills loaded
                  </span>
                </div>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills

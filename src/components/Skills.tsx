import { MDBTypography } from "mdb-react-ui-kit"
import { skillCategories, getImage } from "../utils/tech-icons"
import type { SectionProps } from "../types/types"

function Skills({ id }: SectionProps) {
  const categories = skillCategories()

  return (
    <div id={id} data-testid={id}>
      <hr />
      <MDBTypography tag="h2" className="py-2 text-center">
        Skills
      </MDBTypography>
      <hr />
      <div className="pt-3">
        {Object.entries(categories).map(([categoryName, categoryData]) => (
          <div key={categoryName} className="skill-category mb-5">
            {/* Category Header */}
            <div className="category-header">
              <div className="category-icon">{categoryData.icon}</div>
              <h3 className="category-name">{categoryName}</h3>
            </div>
            {/* Skills Grid */}
            <div className="skills-list text-center">
              {categoryData.skills.map(
                (skill: (typeof categoryData.skills)[number]) =>
                  getImage(skill),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

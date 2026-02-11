import { MDBContainer } from "mdb-react-ui-kit"

import TestingLib from "IMG/octopus.png"
import StyledComp from "IMG/styled-components.png"
import { capitalizeFirstLetter } from "./utils"
import type {
  CustomImageMap,
  GetImageProps,
  SkillCategories,
} from "../types/types"
import { iconSources } from "../constants/appData"

// Custom images for tools without devicon support
const customImages: CustomImageMap = {
  "styled-components": (
    <img src={StyledComp} alt="styled-components" width={60} height={60} />
  ),
  "testing-library": (
    <img src={TestingLib} alt="testing-library" width={60} height={60} />
  ),
}

// Categorized skills with core skills marked
export function skillCategories(): SkillCategories {
  return {
    "Test Automation & QA": {
      icon: "🧪",
      skills: [
        {
          name: "cypress",
          years: "2+",
          isCore: true,
          imageSrc: iconSources.cypress,
        },
        {
          name: "playwright",
          years: "1+",
          isCore: true,
          imageSrc: iconSources.playwright,
        },
        {
          name: "testing-library",
          years: "2+",
          isCore: true,
          customImage: customImages["testing-library"],
        },
        {
          name: "tricentis-qtest",
          years: "3+",
          isCore: false,
          imageSrc: iconSources["tricentis-qtest"],
        },
        {
          name: "browserstack",
          years: "2+",
          isCore: false,
          imageSrc: iconSources.browserstack,
        },
      ],
    },
    "Frontend Development": {
      icon: "🎨",
      skills: [
        {
          name: "typeScript",
          years: "4+",
          isCore: true,
          imageSrc: iconSources.typescript,
        },
        {
          name: "javaScript",
          years: "8+",
          isCore: true,
          imageSrc: iconSources.javascript,
        },
        {
          name: "react",
          years: "6+",
          isCore: true,
          imageSrc: iconSources.react,
        },
        {
          name: "ember",
          years: "3",
          isCore: false,
          imageSrc: iconSources.ember,
        },
        {
          name: "html",
          years: "8+",
          isCore: false,
          imageSrc: iconSources.html,
        },
        { name: "css", years: "8+", isCore: false, imageSrc: iconSources.css },
        {
          name: "styled-components",
          years: "3+",
          isCore: false,
          customImage: customImages["styled-components"],
        },
      ],
    },
    "Development Tools & CI/CD": {
      icon: "🔧",
      skills: [
        {
          name: "github",
          years: "8+",
          isCore: false,
          imageSrc: iconSources.github,
        },
        {
          name: "gitlab",
          years: "3+",
          isCore: false,
          imageSrc: iconSources.gitlab,
        },
        {
          name: "bitbucket",
          years: "3+",
          isCore: false,
          imageSrc: iconSources.bitbucket,
        },
        {
          name: "vscode",
          years: "6+",
          isCore: false,
          imageSrc: iconSources.vscode,
        },
        {
          name: "webpack",
          years: "4",
          isCore: false,
          imageSrc: iconSources.webpack,
        },
        { name: "vim", years: "3+", isCore: false, imageSrc: iconSources.vim },
      ],
    },
  }
}

/**
 * Renders a skill icon with its name and years of experience.
 * @param name - Skill name
 * @param imageSrc - URL to skill icon
 * @param customImage - Custom JSX image element (if no imageSrc)
 * @param isCore - Whether this is a core skill (TBD renders larger)
 */
export function getImage({
  name,
  years,
  imageSrc,
  customImage,
  isCore = false,
}: GetImageProps): JSX.Element {
  const displayName = capitalizeFirstLetter(name)
  const size = isCore ? 50 : 50

  return (
    <MDBContainer
      key={name}
      className={`skill-item rounded-8 py-3 ${isCore ? "skill-item-core" : ""}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          height={size}
          width={size}
          loading="lazy"
        />
      ) : (
        customImage
      )}
      <p className="skill-name mb-1">{displayName}</p>
      <p className="skill-years mb-0">{years} years</p>
    </MDBContainer>
  )
}

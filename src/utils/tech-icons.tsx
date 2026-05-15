import { MDBContainer } from "mdb-react-ui-kit"

import TestingLib from "../assets/img/octopus.png"
import StyledComp from "../assets/img/styled-components.png"
import { DEVICON_BASE_URL } from "../constants/appData"

import { capitalizeFirstLetter } from "./utils"

import type { Skill } from "../types/types"

const customImages: Record<string, JSX.Element> = {
  "styled-components": (
    <img src={StyledComp} alt="styled-components" width={60} height={60} />
  ),
  "testing-library": (
    <img src={TestingLib} alt="testing-library" width={60} height={60} />
  ),
}

export function getImage({ name, years, iconPath, customImageKey, isCore = false }: Skill): JSX.Element {
  const displayName = capitalizeFirstLetter(name)
  const imageSrc = iconPath != null ? `${DEVICON_BASE_URL}/${iconPath}` : undefined
  const customImage = customImageKey != null ? customImages[customImageKey] : undefined

  return (
    <MDBContainer
      key={name}
      className={`skill-item rounded-8 py-3 ${isCore ? "skill-item-core" : ""}`}
    >
      {imageSrc != null ? (
        <img src={imageSrc} alt={name} height={50} width={50} loading="lazy" />
      ) : (
        customImage
      )}
      <p className="skill-name mb-1">{displayName}</p>
      <p className="skill-years mb-0">{years} years</p>
    </MDBContainer>
  )
}

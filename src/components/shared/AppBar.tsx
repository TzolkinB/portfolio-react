import { useState } from "react"

import qaResume from "../../assets/img/Bell_Kimberly-Resume.pdf"

import CatEasterEgg from "./CatEasterEgg"

const navLink = (name: string, link: string) => (
  <li>
    <a href={link}>
      <span aria-hidden="true">./</span>
      {name}
    </a>
  </li>
)

const AppBar = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className="nav">
      <CatEasterEgg />
      <a className="logo" href="/">
        kim<span>bell</span>.me
      </a>
      <button
        type="button"
        className="nav-burger"
        aria-expanded={openNav}
        aria-controls="nav-links"
        aria-label="Toggle navigation"
        onClick={() => setOpenNav(!openNav)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <ul
        id="nav-links"
        data-testid="nav-links"
        className={`nav-links${openNav ? " open" : ""}`}
      >
        {navLink("About", "#about")}
        {navLink("Skills", "#skills")}
        {navLink("Projects", "#projects")}
        <li>
          <a href={qaResume} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">./</span>Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default AppBar

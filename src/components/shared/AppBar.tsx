import { useState } from "react"

import qaResume from "../../assets/img/Bell_Kimberly-Resume.pdf"

import CatEasterEgg from "./CatEasterEgg"

const AppBar = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <header>
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
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href={qaResume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppBar

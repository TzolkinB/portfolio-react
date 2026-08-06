import qaResume from "../assets/img/Bell_Kimberly-Resume.pdf"
import Me from "../assets/img/profile2.jpg"
import {
  badgeContent,
  DEV_MESSAGE,
  heroContent,
  heroSocialLinks,
  heroTerminal,
  statBandData,
} from "../constants/appData"

import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"

function Home() {
  console.log(DEV_MESSAGE.text, DEV_MESSAGE.styles)
  return (
    <div className="page">
      <div id="home" data-testid="home" className="hero">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1>{heroContent.name}</h1>
        <p className="title">{heroContent.title}</p>

        <div className="hero-grid">
          <div className="hero-left">
            <div
              className="tags"
              role="list"
              aria-label="Technical skills badges"
            >
              {badgeContent.map((item) => (
                <span key={item.text} className="tag" role="listitem">
                  {item.text}
                </span>
              ))}
            </div>

            <div className="cta-row">
              <a className="btn primary" href={heroContent.ctaPrimary.href}>
                {heroContent.ctaPrimary.label}
              </a>
              <a
                className="btn ghost"
                href={qaResume}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroContent.ctaSecondary.label}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="social">
              {heroSocialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span aria-hidden="true">[ </span>
                  {link.label}
                  <span aria-hidden="true"> ]</span>
                </a>
              ))}
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot" aria-hidden="true" />
              <span className="dot" aria-hidden="true" />
              <span className="dot" aria-hidden="true" />
              <span className="path">{heroTerminal.path}</span>
            </div>
            <div className="terminal-body">
              <span className="type-line tl-whoami">
                {heroTerminal.whoamiPrompt}
              </span>
              <span className="type-line tl-whoami-reply output">
                {heroTerminal.whoamiOutput}
              </span>
              <span className="type-line tl-role">
                {heroTerminal.rolePrompt}
              </span>
              <span className="type-line tl-role-reply output">
                {heroTerminal.roleOutput}
              </span>
              <span className="type-line tl-photo">
                {heroTerminal.photoPrompt}
              </span>
              <div className="terminal-photo-frame">
                <img
                  src={Me}
                  alt="Kim Bell - Senior SDET and Frontend Developer"
                  className="terminal-photo"
                  loading="eager"
                />
              </div>
              <span className="type-line tl-status">
                {heroTerminal.statusPrompt}
              </span>
              <span className="type-line tl-status-reply output">
                {heroTerminal.statusOutput}
                <span className="cursor" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        <div
          className="stat-band"
          data-testid="stat-band"
          role="list"
          aria-label="Career highlights"
        >
          {statBandData.map((stat) => (
            <div className="stat" role="listitem" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </div>
  )
}

export default Home

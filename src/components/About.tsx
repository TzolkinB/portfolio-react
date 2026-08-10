import { useRef, useState } from "react"

import { aboutContent, aboutTabs } from "../constants/appData"
// import { TechLink } from "../utils/utils"

import type { AboutTabId, SectionProps } from "../types/types"

export const accordionTitles = {
  qa: "Senior SDET in Web Test Automation | Ally Financial",
  dev: "Software Engineer in Frontend Development | Ally Financial",
} as const

export const qaAccomplishments = [
  <>
    Led transition from 100% manual to 90% automated testing across 10 teams in
    2 years using Cypress, Testing Library, TypeScript, and Gitlab CI/CD,
    {/* <TechLink href="https://www.cypress.io/">Cypress</TechLink>,{" "}
    <TechLink href="https://testing-library.com/docs/cypress-testing-library/intro">
      Testing-Library
    </TechLink>
    , <TechLink href="https://www.typescriptlang.org/">TypeScript</TechLink>,
    and <TechLink href="https://docs.gitlab.com/ee/ci/">Gitlab CI/CD</TechLink>, */}
    reducing regression effort and enabling consistent 2-week release cycles.
  </>,
  <>
    Owned and scaled a TypeScript + Cypress automation framework used by 10
    engineering teams, expanding from 11 to 35 repositories. The adoption
    challenge was moving teams off manual testing without disruption; I reduced
    friction through rollout docs, reusable code examples, hands-on training,
    and weekly office hours to accelerate onboarding and resolve maintenance
    questions.
  </>,
  <>
    Integrated UI automation into GitLab CI/CD pipelines to run regression
    suites on a schedule and on-demand during release prep. Previously, manual
    overnight runs(by an offshore team) took 2+ hours and were sometimes
    disrupted by environment/network issues. Automating execution reduced
    hardening time (hours → minutes) and, with scheduled runs plus manual
    triggers, sustained a reliable 2-week release cadence.
  </>,
  <>
    Created Cypress + Testing Library commands and guardrails (API completion,
    feature flags, contract-dependent flows) to eliminate divergence across
    teams working on a shared microservice architecture. Because teams regularly
    re-organized and new members onboarded, I emphasized clear conventions and
    examples so engineers could contribute immediately. Result: 75% less
    repetitive manual test work and more consistent suites.”
  </>,
  <>
    Served as the escalation point for flaky and ambiguous failures. I worked
    directly with developers to build Cypress confidence so they would initiate
    standard root cause triage and do a first-pass when failures looked like ‘a
    Cypress issue’ (product vs. automation vs. network/environment vs. feature
    flags or pipeline/Git changes). This created a clear escalation path and
    reduced time-to-resolution.
  </>,
]

export const devAccomplishments = [
  <>
    Delivered responsive frontend features across Ember and React during
    large-scale migration, balancing feature work with test modernization;
    validated by Jest and BrowserStack prior to QA handoff.
  </>,
  <>
    Championed Cypress adoption by contributing to the proof of concept, then
    leading training and establishing reusable test patterns that became the
    organization standard.
  </>,
  <>
    Led automated test migration to align with React architecture, preserving
    regression coverage and stability during the platform transition.
  </>,
  <>
    Used Swagger to validate API contracts during integration, creating mocks
    and tracing UI failures back to contract changes.
  </>,
]

const roleWriteUps = [
  {
    title: accordionTitles.qa,
    accomplishments: qaAccomplishments,
    summary: (
      <>
        Architected and scaled Ally&apos;s test automation framework that
        enabled 10 teams to shift from manual to automation testing. As
        technical lead and primary escalation point for framework issues, I
        partnered with product and engineering teams to align workflows and
        eliminate bottlenecks.
      </>
    ),
  },
  {
    title: accordionTitles.dev,
    accomplishments: devAccomplishments,
    summary: (
      <>
        Joined during Ally&apos;s critical Ember-to-React migration, delivering
        frontend features across 2+ ecosystems while leading the parallel effort
        to modernize automated testing. Became the organization&apos;s Cypress
        subject matter expert, training teams and establishing shared testing
        patterns.
      </>
    ),
  },
]

const tabId = (id: AboutTabId) => `about-tab-${id}`
const panelId = (id: AboutTabId) => `about-panel-${id}`

const panelContent: Record<AboutTabId, React.ReactNode> = {
  summary: (
    <p className="about-lead">
      With 8+ years of software experience, I bring a developer&apos;s mindset
      to quality engineering. I believe quality isn&apos;t a phase, it&apos;s
      built in from day one, and I design automation to reduce ambiguity in
      failures and improve feedback loops.
    </p>
  ),
  experience: (
    <>
      <p className="about-lead">
        I&apos;ve built and led quality platforms end-to-end, from front-end
        understanding to automation architecture. I owned a shared Cypress +
        TypeScript automation platform used by 10 engineering teams across 35
        repositories, then helped turn regression testing into a repeatable
        release capability by integrating suites into GitLab CI/CD. The result:
        hardening went from hours to minutes, and my team established a clear
        escalation path for flaky or ambiguous failures. Recently, I’ve extended
        the same evidence-first approach into Playwright and AI-assisted QA
        tooling.
      </p>

      <div className="accordion-group">
        {roleWriteUps.map((role) => (
          <details className="accordion" key={role.title}>
            <summary>
              <span className="disclosure-icon" aria-hidden="true" />
              {role.title}
            </summary>
            <div className="accordion-body">
              <p>{role.summary}</p>
              <ul className="accomplishments" role="list">
                {role.accomplishments.map((accomplishment, i) => (
                  <li key={i}>
                    <span
                      className="check"
                      data-testid="success-check"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{accomplishment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </>
  ),
  focus: (
    <p className="about-lead">
      I&apos;m especially interested in roles where testing strategy matters.
      Where I can partner with engineering teams to design automation that
      scales, is trusted, and reduces friction instead of creating it. I thrive
      in environments that treat test infrastructure as production code:
      thoughtfully engineered, maintainable, and built for long-term adoption.
    </p>
  ),
  "off-the-clock": (
    <p className="about-lead">
      When I am not coding, I love to read and be outside. In fact, I often use
      lunch breaks as an opportunity to get away from the computer and take a
      walk. Remote roles allowed me to move closer to my family, and I love
      spending my weekends with my nieces and nephews.
    </p>
  ),
}

const About = ({ id }: SectionProps) => {
  const [activeTab, setActiveTab] = useState<AboutTabId>(aboutTabs[0].id)
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const focusTab = (targetId: AboutTabId) => {
    setActiveTab(targetId)
    tabButtonRefs.current[targetId]?.focus()
  }

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const activeIndex = aboutTabs.findIndex((tab) => tab.id === activeTab)

    switch (event.key) {
      case "ArrowRight":
        focusTab(aboutTabs[(activeIndex + 1) % aboutTabs.length].id)
        break
      case "ArrowLeft":
        focusTab(
          aboutTabs[(activeIndex - 1 + aboutTabs.length) % aboutTabs.length].id,
        )
        break
      case "Home":
        focusTab(aboutTabs[0].id)
        break
      case "End":
        focusTab(aboutTabs[aboutTabs.length - 1].id)
        break
      default:
        return
    }

    event.preventDefault()
  }

  return (
    <div id={id} data-testid={id} className="about">
      <h2 className="prompt">
        <span className="prompt-symbol" aria-hidden="true">
          $
        </span>{" "}
        {aboutContent.heading}
      </h2>
      <p className="about-file-count">{aboutContent.caption}</p>

      <div className="about-editor">
        <div className="tab-bar" role="tablist" aria-label="About file tabs">
          {aboutTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={tabId(tab.id)}
              aria-selected={tab.id === activeTab}
              aria-controls={panelId(tab.id)}
              tabIndex={tab.id === activeTab ? 0 : -1}
              className="tab-label"
              ref={(el) => {
                tabButtonRefs.current[tab.id] = el
              }}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={handleTabKeyDown}
            >
              {tab.filename}
            </button>
          ))}
        </div>

        <div className="about-select-wrap">
          <select
            className="about-select"
            aria-label="About file"
            value={activeTab}
            onChange={(event) => setActiveTab(event.target.value as AboutTabId)}
          >
            {aboutTabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.filename}
              </option>
            ))}
          </select>
        </div>

        <div className="about-panels">
          {aboutTabs.map((tab) => (
            <div
              key={tab.id}
              id={panelId(tab.id)}
              role="tabpanel"
              aria-label={tab.filename}
              tabIndex={0}
              hidden={activeTab !== tab.id}
            >
              {panelContent[tab.id]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

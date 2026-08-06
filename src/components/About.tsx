import { aboutContent } from "../constants/appData"
import { TechLink } from "../utils/utils"

import type { SectionProps } from "../types/types"

export const accordionTitles = {
  qa: "Senior SDET in Web Test Automation | Ally Financial",
  dev: "Software Engineer in Frontend Development | Ally Financial",
} as const

export const qaAccomplishments = [
  <>
    Led transition from <strong>100% manual to 90% automated testing</strong>{" "}
    across 10 teams in 2 years using{" "}
    <TechLink href="https://www.cypress.io/">Cypress</TechLink>,{" "}
    <TechLink href="https://testing-library.com/docs/cypress-testing-library/intro">
      Testing-Library
    </TechLink>
    , <TechLink href="https://www.typescriptlang.org/">TypeScript</TechLink>,
    and <TechLink href="https://docs.gitlab.com/ee/ci/">Gitlab CI/CD</TechLink>,
    reducing regression effort and enabling consistent 2-week release
    cycles{" "}
  </>,
  <>
    Designed and scaled a <strong>TypeScript-based Cypress framework </strong>
    (internal NPM package) across <strong>35 repositories</strong> (from 11),
    serving 10 engineering teams; standardized automation practices and
    framework adoption
  </>,
  <>
    Integrated UI automation into <strong>Gitlab CI/CD pipelines</strong>,
    reducing release hardening time from hours to minutes and ensuring
    on-schedule sprint deployments
  </>,
  <>
    Built and scaled{" "}
    <strong>
      reusable Cypress (with Testing Library) commands and testing standards
    </strong>
    , accelerating test development by 75% and enabling consistent execution
    across teams
  </>,
  <>
    <strong>Reduced test flakiness across 10 teams</strong> by implementing
    mocking strategies for environmental dependencies (feature flags, API
    contract changes) establishing common test patterns with built-in guards for
    test stability
  </>,
]

export const devAccomplishments = [
  <>
    Delivered responsive frontend features across Ember and React ecosystems
    during large-scale migration, balancing feature delivery with modernization;
    validated work using Jest and BrowserStack prior to QA handoff
  </>,
  <>
    <strong>Championed Cypress adoption</strong> by participating in
    proof-of-concept, then leading training and establishing foundational
    testing patterns that became the standard across the organization
  </>,
  <>
    Lead the <strong>migration of automated tests</strong> to align with React
    architecture, maintaining test coverage and stability during platform
    transition
  </>,
  <>
    Leveraged Swagger for <strong>API validation</strong> during integration,
    creating mocks and diagnosing UI issues arising from API contract
    modifications
  </>,
]

const roleWriteUps = [
  {
    title: accordionTitles.qa,
    accomplishments: qaAccomplishments,
    summary: (
      <>
        Architected and scaled Ally&apos;s test automation framework that
        enabled{" "}
        <strong>10 teams to shift from manual to automation testing</strong>. As
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
        Joined during Ally&apos;s critical{" "}
        <strong>Ember-to-React migration</strong>, developing features across 2+
        ecosystems while simultaneously leading the parallel effort to migrate
        and modernize automated tests. Became the
        <strong> subject matter expert on Cypress</strong>, training teams and
        accelerating tool adoption across the organization.
      </>
    ),
  },
]

const About = ({ id }: SectionProps) => {
  return (
    <div id={id} data-testid={id} className="about">
      <h2 className="prompt">
        <span className="prompt-symbol" aria-hidden="true">
          $
        </span>{" "}
        {aboutContent.heading}
      </h2>

      {aboutContent.intro.map((paragraph) => (
        <p className="about-lead" key={paragraph}>
          {paragraph}
        </p>
      ))}

      <div className="terminal-details-group">
        {roleWriteUps.map((role) => (
          <details className="terminal-details" key={role.title}>
            <summary>
              <span className="disclosure-icon" aria-hidden="true" />
              {role.title}
            </summary>
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
                  {accomplishment}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      <p className="about-lead">{aboutContent.notCoding}</p>
      <p className="about-lead">
        {aboutContent.contactIntro}{" "}
        <a href={`mailto:${aboutContent.email}`}>{aboutContent.email}</a>
      </p>
    </div>
  )
}

export default About

/* 
  INFO: For now comment out setting accordion state
  so that both QA and Dev accordions are closed by default
*/
// import { useState } from "react"
import {
  MDBTypography,
  MDBIcon,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit"

import { SectionProps } from "../types/types"
import { TechLink } from "../utils/utils"

const About = ({ id }: SectionProps) => {
  // const [active, setActive] = useState<number | number[]>(1)

  const accordionTitles = {
    qa: "Senior SDET in Web Test Automation | Ally Financial",
    dev: "Software Engineer in Frontend Development | Ally Financial",
  } as const

  const qaAccomplishments = [
    <>
      Led transition from{" "}
      <span className="fw-bold">100% manual → 90% automated testing</span>{" "}
      across 10 teams in 2 years using{" "}
      <TechLink href="https://www.cypress.io/">Cypress</TechLink>,{" "}
      <TechLink href="https://www.typescriptlang.org/">TypeScript</TechLink>,
      and <TechLink href="https://docs.gitlab.com/ee/ci/">CI/CD</TechLink>
      —reducing regression effort and enabling consistent 2-week release
      cycles{" "}
    </>,
    <>
      Architected a{" "}
      <span className="fw-bold">TypeScript-based Cypress framework </span>
      (internal NPM package) adopted across{" "}
      <span className="fw-bold">35 repositories</span> (scaled from 11),
      standardizing test strategy across multiple business lines
    </>,
    <>
      Built and scaled{" "}
      <span className="fw-bold">
        reusable Cypress commands and testing standards
      </span>
      , accelerating test development by 75%
    </>,
    <>
      <span className="fw-bold">Reduced test flakiness across 10 teams</span> by
      implementing mocking strategies and establishing common test patterns with
      built-in stability guards
    </>,
  ]

  const devAccomplishments = [
    <>
      Delivered responsive frontend features across Ember and React ecosystems
      during large-scale migration
    </>,
    <>
      <span className="fw-bold">Championed Cypress adoption</span> by leading
      training and establishing foundational testing patterns that became the
      standard across the organization
    </>,
    <>
      Partnered with QA on the{" "}
      <span className="fw-bold">migration of automated tests</span> to align
      with React architecture, ensuring test coverage and stability were
      maintainted during platform transition
    </>,
  ]

  return (
    <div id={id} data-testid={id}>
      <div>
        <hr />
        <MDBTypography tag="h2" className="py-2 text-center">
          About
        </MDBTypography>
        <hr />
      </div>
      <MDBTypography className="fw-light">
        With development experience prior to pivoting to SDET, I believe quality
        isn&apos;t a phase, it&apos;s baked in from day one. Good testing
        frameworks disappear into the background; teams just use them. I design
        automation that scales because I&apos;ve seen what happens when it
        doesn&apos;t: friction, bottlenecks, people avoiding tests entirely. I
        care about bridging the gap between QA and engineering because testing
        is everyone&apos;s responsibility.{" "}
      </MDBTypography>
      <MDBTypography className="fw-light">
        I&apos;m looking for roles where testing strategy matters. Where I can
        partner with engineering teams to design automation they want to use,
        and that actually scales. I thrive in environments that value shift-left
        thinking and treat test infrastructure as seriously as production code.
      </MDBTypography>

      {/* Accordions */}
      {/* <MDBAccordion active={active} onChange={(itemId) => setActive(itemId)}> */}
      <MDBAccordion>
        <MDBAccordionItem
          collapseId={1}
          headerTitle={accordionTitles.qa}
          data-testid={accordionTitles.qa}
        >
          Built Ally&apos;s automation infrastructure that enabled{" "}
          <span className="fw-bold">
            10 teams to shift from manual to automated testing
          </span>
          . As technical lead and primary escalation point for framework issues,
          I partnered with product and engineering teams to align workflows and
          eliminate bottlenecks.
          <MDBTypography
            listUnStyled
            className="mb-0 px-3"
            tag="ul"
            role="list"
          >
            {qaAccomplishments.map((accomplishment, i) => {
              return (
                <li className="mb-2 fw-light" key={i}>
                  <MDBIcon
                    icon="check-circle"
                    className="me-2 text-success"
                    data-testid="success-check"
                    aria-hidden="true"
                  />
                  {accomplishment}
                </li>
              )
            })}
          </MDBTypography>
        </MDBAccordionItem>

        <MDBAccordionItem
          collapseId={2}
          headerTitle={accordionTitles.dev}
          data-testid={accordionTitles.dev}
        >
          Joined during Ally&apos;s critical{" "}
          <span className="fw-bold">Ember-to-React migration</span>, developing
          features across 2+ ecosystems while simultaneously leading the
          parallel effort to migrate and modernize automated tests. Became the
          <span className="fw-bold">subject matter expert on Cypress</span>,
          training teams and accelerating tool adoption across the organization.
          <MDBTypography
            listUnStyled
            className="mb-0 px-3"
            tag="ul"
            role="list"
          >
            {devAccomplishments.map((accomplishment, i) => {
              return (
                <li className="mb-2 fw-light" key={i}>
                  <MDBIcon
                    icon="check-circle"
                    className="me-2 text-success"
                    data-testid="success-check"
                    aria-hidden="true"
                  />
                  {accomplishment}
                </li>
              )
            })}
          </MDBTypography>
        </MDBAccordionItem>
      </MDBAccordion>

      <MDBTypography className="fw-light align-self-start pt-3">
        When I am not coding, I love to read and be outside. In fact, I often
        use lunch breaks as an opportunity to get away from the computer and
        take a walk. Since remote positions allow me to be closer to family, I
        also enjoy spending time with my nieces and nephews on the weekends now
        that I am able to live closer to them.
      </MDBTypography>
      <MDBTypography className="fw-light align-self-start pt-1">
        I am always looking for new opportunites and challenges so feel free to
        reach out to me: &nbsp;
        <a href="mailto:krbell4@gmail.com">krbell4@gmail.com</a>
      </MDBTypography>
    </div>
  )
}

export default About

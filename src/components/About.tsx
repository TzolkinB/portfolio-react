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

// eslint-disable-next-line react/function-component-definition
const About = (props: { id: string }) => {
  const { id } = props
  // const [active, setActive] = useState<number | number[]>(1)

  const qaAccordionTitle =
    "QA Software Engineer in Test (SDET) in Web Test Automation"
  const devAccordionTitle = "Frontend Developer in React"
  const qaAccomplishments = [
    "Created a 'Best Practices and Standards Guide' for Ally Bank's implimentation of their framework and tools.",
    <>
      Standardized common UI testing patterns, with examples, to ensure ease of
      adoption as well as adherence to best practices and quality standards.{" "}
      <a
        href="https://kimbellcypress.notion.site/Usage-bd2edeebefff4f6ebbdf3b681a03ead1"
        target="_blank"
        rel="noreferrer"
      >
        Common UI Patterns
      </a>
    </>,
    <>
      Managed the global internal <span className="fw-bold">NPM</span> package,
      written in <span className="fw-bold">Javscript</span> and{" "}
      <span className="fw-bold">Typescript</span>, that incorporated Cypress
      configurations. This package resulted in streamlined operations across 10
      teams and at least one line of business.
    </>,
    <>
      Added test jobs to <span className="fw-bold">Gitlab&apos;s CI/CD</span>{" "}
      pipeline using <span className="fw-bold">YAML</span> that allowed teams to
      trigger automated tests manually or on scheduled CICD pipeline runs,
      reducing release cycle hardening time from hours to minutes.
    </>,
    <>
      Developed a <span className="fw-bold">Bash</span> shell script to automate
      a needed change during Cypress version upgrade.
    </>,
    <>
      Developed and implemented <span className="fw-bold">Javascript</span>{" "}
      custom commands to increase code efficiency.
    </>,
  ]

  const devAccomplishments = [
    <>
      Developed requested features using <span className="fw-bold">Ember</span>{" "}
      and <span className="fw-bold">React</span> in multiple ecosystems for new
      features to be released while codebase was migrated to{" "}
      <span className="fw-bold">React</span>
    </>,
    "Participated in the entire development life cycle, from concept to release, including sprint planning and story estimation in an agile setting with bi-weekly scrum cycles",
    <>
      Implemented unit tests using <span className="fw-bold">Jest</span> and{" "}
      <span className="fw-bold">Testing Library</span> to maintain code coverage
      at agreed-upon thresholds, ensuring reliability and confidence
    </>,
    "Tested code for accessibility, responsiveness, and cross-browser compatibility, guaranteeing high deliverables prior to review and testing phases",
    <>
      Leveraged <span className="fw-bold">Swagger</span> for API validation
      during integration, creating mocks and diagnosing UI issues arising from
      API contract modifications
    </>,
    "Participated in code reviews, providing constructive feedback, ensuring code quality and best practices.",
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
      <MDBTypography className="fw-light align-self-start">
        I bring 6+ years of experience in responsive frontend web development
        and 2+ years in web test automation.
      </MDBTypography>
      <MDBTypography className="fw-light">
        From 2016 to 2021, I worked as a Frontend Developer in responsive web
        applications, focusing primarily on{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          <span className="fw-bold">React</span>
        </a>{" "}
        ,{" "}
        <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
          <span className="fw-bold">Javascript</span>
        </a>
        , and{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="fw-bold">Typescript</span>
        </a>
        .
      </MDBTypography>
      <MDBTypography className="fw-light">
        In 2022, I transitioned from a Software Engineer focused on Web UI
        development to an SDET position, focusing on automation testing. I
        utilized{" "}
        <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">
          <span className="fw-bold">Cypress</span>
        </a>{" "}
        in conjunction with{" "}
        <a href="https://testing-library.com/" target="_blank" rel="noreferrer">
          <span className="fw-bold">Testing-Library</span>
        </a>{" "}
        to create highly human-readable queries, enhancing both test readability
        and accessibility coverage.
      </MDBTypography>

      {/* QA Accordion */}
      {/* <MDBAccordion active={active} onChange={(itemId) => setActive(itemId)}> */}
      <MDBAccordion>
        <MDBAccordionItem
          collapseId={1}
          headerTitle={qaAccordionTitle}
          data-testid={qaAccordionTitle}
        >
          <MDBTypography listUnStyled className="mb-0 px-3">
            {qaAccomplishments.map((accomplishment, i) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li className="mb-2 fw-light" key={i}>
                  <MDBIcon
                    icon="check-circle"
                    className="me-2 text-success"
                    data-testid="success-check"
                  />
                  {accomplishment}
                </li>
              )
            })}
          </MDBTypography>
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId={2}
          headerTitle={devAccordionTitle}
          data-testid={devAccordionTitle}
        >
          <MDBTypography listUnStyled className="mb-0 px-3">
            {devAccomplishments.map((accomplishment, i) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li className="mb-2 fw-light" key={i}>
                  <MDBIcon
                    icon="check-circle"
                    className="me-2 text-success"
                    data-testid="success-check"
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

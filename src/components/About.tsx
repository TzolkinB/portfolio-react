import { useState } from "react"
import {
  MDBTypography,
  MDBIcon,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit"

// eslint-disable-next-line react/function-component-definition
const About = (props: { id: string }) => {
  const { id } = props
  const [active, setActive] = useState<number | number[]>(1)

  const accomplishments = [
    "Created a 'Best Practices and Standards Guide' for Ally Bank's implimentation of their framework and tools.",
    <>
      Standardized common UI testing patterns, with examples, to ensure ease of
      adoption as well as adherence to best practices and quality standards.{" "}
      <a href="https://kimbellcypress.notion.site/Usage-bd2edeebefff4f6ebbdf3b681a03ead1">
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

  return (
    <div
      id={id}
      data-testid={id}
      className="py-5 d-flex flex-column align-items-center"
    >
      <div>
        <MDBTypography tag="h2" className="text-white py-3">
          About Me
        </MDBTypography>
      </div>
      <MDBTypography className="fw-light align-self-start">
        I have 6+ years experience with responsive web development and 2+ years
        with test automation.
      </MDBTypography>

      {/* QA Accordion */}
      <MDBAccordion active={active} onChange={(itemId) => setActive(itemId)}>
        <MDBAccordionItem collapseId={1} headerTitle="QA SDET">
          <MDBTypography className="fw-light">
            In 2022 I changed positions from a Software Engineer working on Web
            UI to an SDET for automation testing. I used{" "}
            <a href="https://www.cypress.io/">
              <span className="fw-bold">Cypress</span>
            </a>{" "}
            in conjunction with{" "}
            <a href="https://testing-library.com/">
              <span className="fw-bold">Testing-Library</span>
            </a>
            , which made queries incredibly human readable and added some
            accessibility coverage as well. In this role I:
          </MDBTypography>
          <MDBTypography
            listUnStyled
            className="mb-0 px-5"
            style={{ minWidth: "22rem" }}
          >
            {accomplishments.map((accomplishment, i) => {
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
        <MDBAccordionItem collapseId={2} headerTitle="Accordion Item #2">
          <p>something something</p>
        </MDBAccordionItem>
      </MDBAccordion>
      {/* <MDBBadge pill light color='primary'>
           Onboarding
       </MDBBadge> */}
      {/* My initial focus was on implimenting and assisting in the transition from what was a one hundred percent manual process to a heavily automated testing process in the web space. d
        In addition to training teams and individuals, my move to SDET has allowed me to gain a lot of experience in various other skills.   */}
      <MDBTypography className="fw-light align-self-start pt-5">
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

import { MDBTypography, MDBIcon } from "mdb-react-ui-kit"

// eslint-disable-next-line react/function-component-definition
const About = (props: { id: string }) => {
  const { id } = props

  const accomplishments = [
    "Created and maintained a 'Best Practices and Standards Guide' for Ally's implimentation of the framework and tools they were using.",
    "Identified patterns used for common UI elements and added examples to ensure not only ease of adoption but also that all departments would meet the same quality and expectations.",
    <>
      Managed the global internal <span className="fw-bold">NPM</span> package,
      written in <span className="fw-bold">Javscript</span> and{" "}
      <span className="fw-bold">Typescript</span>, that contained global
      configurations in order to reduce the number of manual changes made by
      individual teams. This was used by 10 teams and multiple lines of
      business.
    </>,
    <>
      Added test jobs to <span className="fw-bold">Gitlab&apos;s CI/CD</span>{" "}
      pipeline using <span className="fw-bold">YAML</span> that allowed teams to
      trigger automated tests manually or on scheduled CICD pipeline runs,
      reducing the hardening time for release cycles from hours to minutes in
      many cases.
    </>,
    <>
      Developed a <span className="fw-bold">Bash</span> shell script to automate
      a needed change during Cypress version upgrade.
    </>,
    <>
      Developed and implemented <span className="fw-bold">Javascript</span>{" "}
      custom commands to increase efficiency writing tests.
    </>,
  ]

  return (
    <div
      id={id}
      data-testid={id}
      className="py-5 d-flex flex-column align-items-center"
    >
      <div>
        <MDBTypography tag="h3" className="text-white py-3">
          About Me
        </MDBTypography>
      </div>
      <MDBTypography className="fw-light align-self-start">
        I have 7+ years experience in web development and 2+ years in test
        automation.
      </MDBTypography>
      <MDBTypography className="fw-light">
        In 2022 I changed positions from a Senior Software Engineer working on
        Web UI to an SDET for automation testing. I used{" "}
        <span className="fw-bold">Cypress</span> in conjunction with{" "}
        <span className="fw-bold">Testing-Library</span>, which made queries
        incredibly human readable and added some accessibility coverage as well.
        In this role I:
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
        <span className="fw-bold">
          Why am I using the domain name &quot;Fierce Whiskers&quot;?
        </span>{" "}
        Long story short, when I was originally buying domains, I was looking
        for &quot;.com&quot; and variations on my name were taken. Therefore, I
        bought &quot;Fierce Whiskers&quot; because it reminds me of my oldest
        cat who puts up a good front but really is just a lap kitty who wants
        cuddles.
      </MDBTypography>
      <MDBTypography className="fw-light align-self-start pt-1">
        I am always looking for new opportunites and challenges so feel free to
        reach out to me: krbell4@gmail.com
      </MDBTypography>
      {/* TODO: */}
      {/* Why remote only? */}
      {/* My Testing -- what is it from testing library? */}
      {/* Why not BDD () Gherkin or POM (page object model)? */}
      {/* Why Cypress? */}
    </div>
  )
}

export default About

import { MDBFooter } from "mdb-react-ui-kit"

// eslint-disable-next-line react/function-component-definition
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <MDBFooter className="d-flex justify-content-between align-items-center">
      <div />
      <p className="copyright text-gradient">
        &#169; {currentYear} Copyright Kim Bell
      </p>
      <div className="footer-links text-gradient">
        <a
          href="https://github.com/TzolkinB"
          aria-label="link to github"
          target="_blank"
          rel="noreferrer"
          className="px-2 pt-4 pb-2"
        >
          <i className="devicon-github-original" style={{ fontSize: 40 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/kimbell4"
          aria-label="link to linkedin"
          target="_blank"
          rel="noreferrer"
          className="px-2 pt-4 pb-2"
        >
          <i className="devicon-linkedin-plain" style={{ fontSize: 40 }} />
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer

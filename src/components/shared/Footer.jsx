import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MDBFooter className="d-flex justify-content-between align-items-center">
      <div></div>
      <div className="copyright">
        &#169; {currentYear} Copyright Kim Bell
      </div>
      <div className="footer-links">
        <a href="https://github.com/TzolkinB" target="_blank" className="px-2 pt-4 pb-2">
          <i className="devicon-github-original" style={{fontSize: 40}}></i>
        </a>
        <a href="https://www.linkedin.com/in/kimbell4" target="_blank" className="px-2 pt-4 pb-2">
          <i className="devicon-linkedin-plain" style={{fontSize: 40}}></i>
        </a>
      </div>
      </MDBFooter>
  );
}

export default Footer;

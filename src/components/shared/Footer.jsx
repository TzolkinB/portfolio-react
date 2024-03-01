import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MDBFooter className="d-flex justify-content-between align-items-center">
      <div></div>
      <div className="copyright">
        <p className="text-white"> &#169; {currentYear} Copyright Kimberly Bell</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/TzolkinB" target="_blank" className="px-2 pt-4 pb-2">
          <i class="devicon-github-original" style={{fontSize: 40}}></i>
        </a>
        <a href="https://www.linkedin.com/in/kimbell4" target="_blank" className="px-2 pt-4 pb-2">
          <i class="devicon-linkedin-plain" style={{fontSize: 40}}></i>
        </a>
      </div>
      </MDBFooter>
  );
}

export default Footer;

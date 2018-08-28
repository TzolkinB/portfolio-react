import React from 'react';
import {Link} from 'react-router-dom';
import Github from 'IMG/github.png';
import LinkedIn from 'IMG/linked-in.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (<footer className="bg-primary">
    <div className="container-fluid">
      <div className="row pt-3 mt-2 mb-0">
        <div className="col-4">&nbsp;</div>
        <div className="col-4">
          <p className="text-white text-uppercase mb-0 mt-1">Copyright &#169; {currentYear}
            &nbsp; Kimberly Bell
          </p>
        </div>
        <div className="col-4">
          <ul className="list-unstyled list-inline float-right">
            <li className="list-inline-item">
              <a href="https://github.com/TzolkinB" target="_blank" className="px-2 py-4">
                <i className="fab fa-github fa-2x text-white"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/kimbell4" target="_blank" className="px-2 py-4">
                <i className="fab fa-linkedin fa-2x text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>);
}

export default Footer;

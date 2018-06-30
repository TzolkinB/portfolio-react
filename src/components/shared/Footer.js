import React    from 'react';
import { Link } from 'react-router-dom';
import Github   from 'IMG/github@2x.png';
import LinkedIn from 'IMG/linked-in@2x.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-sm-2 offset-sm-5">
          <p className="text-white">&#169; {currentYear} Kimberly Bell</p>
        </div>
        <div className="col-sm-2 offset-sm-3">
          <ul className="list-inline font-weight-light">
            <li className="list-inline-item">
              <a href="https://github.com/TzolkinB" target="_blank">
                <img src={Github} alt="Github" width="40" height="40" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/kimbell4" target="_blank">
                <img src={LinkedIn} alt="LinkedIn"  width="40" height="40" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

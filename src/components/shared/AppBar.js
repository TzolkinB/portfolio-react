import React    from 'react';
import { Link } from 'react-router-dom';
import Resume   from 'IMG/Bell_Kim-ResumePublic.pdf';
import Whiskers from 'IMG/W-white.png';

const AppBar = () => {
  return(
    <header>
      <nav className="navbar navbar-expand-md text-white navbar-dark">
        <a href="/" className="navbar-brand pl-2">
          <img src={Whiskers} alt="Cat whiskers" />
          <span className="text-white pl-3 font-weight-light">FierceWhiskers.me</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about" className="text-white px-3 py-4">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="text-white px-3 py-4">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="text-white px-3 py-4">Projects</a>
            </li>
            <li className="nav-item">
              <a href={Resume} target="_blank" className="text-white px-3 py-4">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default AppBar;

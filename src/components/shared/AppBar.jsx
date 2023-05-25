import React    from 'react';
import Resume   from 'IMG/Bell_Kim-ResumePublic.pdf';
import Whiskers from 'IMG/W-white.png';

const menuItems = ['About', 'Skills', 'Projects', 'Resume']
const menuList = menuItems.map((item) => {
  if (item === 'Resume') {
    return (
      <li className="nav-item display-5">
        <a href={Resume} target="_blank" className="text-white px-3 py-4">Resume</a>
      </li>
    )
  }
  else {
    return (
      <li className="nav-item display-5">
        <a href={`#${item.toLowerCase()}`} className="text-white px-3 py-4">{item}</a>
      </li>
    )
  }
})

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
            {menuList}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default AppBar;

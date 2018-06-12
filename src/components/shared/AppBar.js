import React    from 'react';
import { Link } from 'react-router-dom';
import AmarLogo from 'IMG/amarLogo.png';

function handleToggleApps(e) {
  const appSwitcher = document.getElementById('app-switcher');
  const profile = document.getElementById('profile');
  appSwitcher.classList.toggle('dropdown-open');
  profile.classList.remove('dropdown-open');
}

function handleToggleProfile() {
  const profile = document.getElementById('profile');
  const appSwitcher = document.getElementById('app-switcher');
  profile.classList.toggle('dropdown-open');
  appSwitcher.classList.remove('dropdown-open');
}

const apps = [
  {name: 'MEGA', letter: 'M', addClass: 'meg', link: '../../../meg/statePortal/admin/index.html'},
  {name: 'County', letter: 'M', addClass: 'meg', link: '../../../meg/countyPortal/admin/index.html'},
  {name: 'Local Unit', letter: 'M', addClass: 'meg', link: '../../../meg/localPortal/index.html'},
  {name: 'State', letter: 'A', addClass: 'amar', link: '../../state/public/index.html'},
  {name: 'TMA', letter: 'A',addClass: 'amar',  link: '../../tma/public/index.html'},
  {name: 'Local Unit', letter: 'A', addClass: 'amar', link: '../../local/public/index.html'}
];

const AppBar = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-lg text-white bg-primary navbar-dark">
        <a href="/" className="navbar-brand pl-2">
          <img src={AmarLogo} alt="AMAR Logo" width="45" height="45" />
          <span className="text-white pl-3 font-weight-light">UIX REACT TEMPLATE</span>
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
              <div className="btn-group">
                <button 
                  className="btn bmd-btn-icon dropdown-toggle ml-3"
                  type="button"
                  id="toggle-app-menu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleToggleApps}
                  onKeyUp={handleToggleApps}>
                  <i className="material-icons">apps</i>
                </button>  
                <div className="dropdown-menu dropdown-menu-right app-dropdown-content" aria-labelledby="toggle-app-menu" id="app-switcher">
                  {apps.map((item, i) => {
                    return(
                      <div key={i} className="app-service-access-square">
                        <a className="dropdown-item" href={item.link}>
                          <div className={`service-letter text-white ${item.addClass}`}>{item.letter}</div>
                          <p className="text-center text-secondary">{item.name}</p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="btn-group">
                <button
                  className="btn bmd-btn-icon dropdown-toggle profile-icon ml-3"
                  type="button"
                  id="toggle-profile-menu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleToggleProfile}
                  onKeyUp={handleToggleProfile}>
                  <i className="material-icons md-48">account_circle</i>
                </button>  
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="toggle-profile-menu" id="profile">
                  <div className="dropdown-item disabled ml-3 pb-1">
                    <p className="weight-regular mb-0 text-dark">Sandy Brown</p>
                    <p className="font-weight-light mb-0">sandybrown@mail.com</p>
                  </div>
                  <div className="profile-btns">
                    <div className="dropdown-item">
                      <Link className="text-success" to="my-account.html">My Account</Link>
                    </div>
                    <div className="dropdown-item">
                      <Link className="text-success" to="login.html">Sign Out</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default AppBar;

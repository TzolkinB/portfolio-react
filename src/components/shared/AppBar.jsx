import { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Resume   from 'IMG/Bell_Kim-Resume.pdf';
import Whiskers from 'IMG/W-white.png';

const AppBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return(
    <header>
      <MDBNavbar expand="lg" fixed="top" className="px-3">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" className="pl-2">
            <img src={Whiskers} alt="Cat whiskers" />
            <span className="pl-3 fs-4">FierceWhiskers.me</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNav}>
            <MDBNavbarNav right fullWidth={false}>
              <MDBNavbarLink href='#about'>About</MDBNavbarLink>
              <MDBNavbarLink href='#skills'>Skills</MDBNavbarLink>
              <MDBNavbarLink href='#projects'>Projects</MDBNavbarLink>
              <MDBNavbarLink href={Resume}>Resume</MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default AppBar;

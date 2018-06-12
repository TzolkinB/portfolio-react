import React    from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mi-footer">
      <div className="container">
        <ul className="list-inline font-weight-light">
          <li className="list-inline-item">
            <Link to="#" target="_blank" className="text-white">Link 1</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/" target="_blank" className="text-white">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" target="_blank" className="text-white">Link 2</Link>
          </li>
        </ul>
        <p className="text-white font-weight-light">Copyright &#169; {currentYear} </p>
      </div>
    </footer>
  );
}

export default Footer;

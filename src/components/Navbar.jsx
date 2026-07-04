import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/nav';
import { site } from '../data/site';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {site.name}
        </Link>
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.to} className="navbar-item">
              <Link
                to={link.to}
                className={`navbar-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

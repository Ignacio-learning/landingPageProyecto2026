import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <footer className={`site-footer ${isHome ? 'site-footer--overlay' : 'site-footer--static'}`}>
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.instagram.com/juako_27/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://flickr.com/people/joa-rocuant/" target="_blank" rel="noopener noreferrer">Flickr</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Joaquín Rocuant. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

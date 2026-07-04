import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <footer className={`site-footer ${isHome ? 'site-footer--overlay' : 'site-footer--static'}`}>
      <div className="footer-content">
        <p className="footer-copy">&copy; {new Date().getFullYear()} Joaquín Rocuant. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

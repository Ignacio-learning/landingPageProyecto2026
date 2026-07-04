import { site } from '../data/site';
import { useFooterVariant } from '../hooks/useFooterVariant';
import './Footer.css';

const Footer = () => {
  const footerVariant = useFooterVariant();

  return (
    <footer className={`site-footer ${footerVariant}`}>
      <div className="footer-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {site.name}. {site.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

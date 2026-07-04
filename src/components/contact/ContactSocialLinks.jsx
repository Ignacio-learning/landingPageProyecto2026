import { SocialIcon } from '../icons/SocialIcons';

const ContactSocialLinks = ({ whatsapp, socialLinks }) => (
  <div className="contact-social">
    <a
      href={whatsapp.url}
      className="contact-social__link contact-social__link--whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsapp.label}
    >
      <SocialIcon id="whatsapp" className="contact-social__icon" />
    </a>
    {socialLinks.map((link) => (
      <a
        key={link.id}
        href={link.href}
        className={`contact-social__link contact-social__link--${link.id}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
      >
        <SocialIcon id={link.id} className="contact-social__icon" />
      </a>
    ))}
  </div>
);

export default ContactSocialLinks;

import './Contact.css';
import { contactContent } from '../data/contact';
import ContactForm from '../components/contact/ContactForm';
import ContactSocialLinks from '../components/contact/ContactSocialLinks';

const Contact = () => {
  const { pageTitle, heading, intro, email, whatsapp, socialLinks } = contactContent;

  return (
    <div className="contact fade-in">
      <div className="container">
        <h1 className="page-title">{pageTitle}</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>{heading}</h2>
            <p>{intro}</p>
            <ContactSocialLinks whatsapp={whatsapp} socialLinks={socialLinks} />
            <div className="contact-details">
              <div className="contact-item">
                <h3>{email.label}</h3>
                <p>{email.address}</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

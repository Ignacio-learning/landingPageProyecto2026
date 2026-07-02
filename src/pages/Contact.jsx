import './Contact.css';

const Contact = () => {
  return (
    <div className="contact fade-in">
      <div className="container">
        <h1 className="page-title">Contacto</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Hablemos</h2>
            <p>
              ¿Interesado en mis servicios fotográficos o tienes alguna consulta? 
              No dudes en contactarme.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>contacto@joaquinrocuant.com</p>
              </div>

            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useContactForm } from '../../hooks/useContactForm';

const ContactForm = () => {
  const {
    status,
    feedback,
    hcaptchaRef,
    hcaptchaSiteKey,
    onSubmit,
    onCaptchaVerify,
    onCaptchaExpire,
    isSubmitDisabled,
    submitLabel,
    formFields,
  } = useContactForm();

  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        <input
          type="checkbox"
          name="botcheck"
          className="form-honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="form-group">
          <label htmlFor="name">{formFields.name.label}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={formFields.name.maxLength}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{formFields.email.label}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={formFields.email.maxLength}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{formFields.message.label}</label>
          <textarea
            id="message"
            name="message"
            rows={formFields.message.rows}
            required
            maxLength={formFields.message.maxLength}
          />
        </div>
        <div className="form-captcha">
          <HCaptcha
            ref={hcaptchaRef}
            sitekey={hcaptchaSiteKey}
            reCaptchaCompat={false}
            onVerify={onCaptchaVerify}
            onExpire={onCaptchaExpire}
          />
        </div>
        <button type="submit" className="btn-submit" disabled={isSubmitDisabled}>
          {submitLabel}
        </button>
        {feedback && (
          <p
            className={`form-feedback form-feedback--${status === 'success' ? 'success' : 'error'}`}
            role="status"
          >
            {feedback}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

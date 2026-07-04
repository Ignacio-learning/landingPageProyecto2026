import { useEffect, useRef, useState } from 'react';
import { contactConfig } from '../config/contact';
import { contactContent } from '../data/contact';

export function useContactForm() {
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [captchaToken, setCaptchaToken] = useState('');
  const isSubmittingRef = useRef(false);
  const cooldownTimerRef = useRef(null);
  const hcaptchaRef = useRef(null);

  const { form } = contactContent;
  const { messages } = form;

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current);
      }
    };
  }, []);

  const startCooldown = (durationMs) => {
    if (cooldownTimerRef.current) {
      clearInterval(cooldownTimerRef.current);
    }

    const endsAt = Date.now() + durationMs;
    setCooldownSeconds(Math.ceil(durationMs / 1000));

    cooldownTimerRef.current = setInterval(() => {
      const remaining = Math.ceil((endsAt - Date.now()) / 1000);
      if (remaining <= 0) {
        clearInterval(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
        setCooldownSeconds(0);
        setStatus('idle');
        setFeedback('');
        return;
      }
      setCooldownSeconds(remaining);
    }, 1000);
  };

  const resetCaptcha = () => {
    hcaptchaRef.current?.resetCaptcha();
    setCaptchaToken('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (isSubmittingRef.current || cooldownSeconds > 0) {
      return;
    }

    if (!contactConfig.web3formsAccessKey) {
      setStatus('error');
      setFeedback(messages.missingConfig);
      return;
    }

    if (!captchaToken) {
      setStatus('error');
      setFeedback(messages.missingCaptcha);
      return;
    }

    isSubmittingRef.current = true;
    setStatus('submitting');
    setFeedback('');

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      access_key: contactConfig.web3formsAccessKey,
      subject: contactConfig.emailSubject,
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      'h-captcha-response': captchaToken,
    };

    try {
      const response = await fetch(contactConfig.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFeedback(messages.success);
        formElement.reset();
        resetCaptcha();
        startCooldown(contactConfig.submitCooldownMs);
        return;
      }

      setStatus('error');
      setFeedback(data.message || messages.error);
      resetCaptcha();
      startCooldown(contactConfig.errorCooldownMs);
    } catch {
      setStatus('error');
      setFeedback(messages.networkError);
      resetCaptcha();
      startCooldown(contactConfig.errorCooldownMs);
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const isSubmitDisabled = status === 'submitting' || cooldownSeconds > 0;

  const submitLabel = (() => {
    if (status === 'submitting') return form.submittingLabel;
    if (cooldownSeconds > 0) return messages.cooldown(cooldownSeconds);
    return form.submitLabel;
  })();

  return {
    status,
    feedback,
    captchaToken,
    hcaptchaRef,
    hcaptchaSiteKey: contactConfig.hcaptchaSiteKey,
    onSubmit,
    onCaptchaVerify: setCaptchaToken,
    onCaptchaExpire: () => setCaptchaToken(''),
    isSubmitDisabled,
    submitLabel,
    formFields: form.fields,
  };
}

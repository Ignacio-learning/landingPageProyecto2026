const buildWhatsappUrl = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const contactContent = {
  pageTitle: 'Contacto',
  heading: 'Hablemos',
  intro:
    '¿Interesado en mis servicios fotográficos o tienes alguna consulta? No dudes en contactarme.',
  email: {
    label: 'Email',
    address: 'contacto@joaquinrocuant.com',
  },
  whatsapp: {
    number: '56974846426',
    message:
      'Hola Joaquín, me interesa conocer los valores de los servicios disponibles. ¿Podría indicarme más información?',
    label: 'Contactar por WhatsApp',
    get url() {
      return buildWhatsappUrl(this.number, this.message);
    },
  },
  socialLinks: [
    {
      id: 'instagram',
      href: 'https://www.instagram.com/juako_27/',
      label: 'Instagram',
    },
    {
      id: 'flickr',
      href: 'https://flickr.com/people/joa-rocuant/',
      label: 'Flickr',
    },
  ],
  form: {
    submitLabel: 'Enviar mensaje',
    submittingLabel: 'Enviando…',
    fields: {
      name: { label: 'Nombre', maxLength: 100 },
      email: { label: 'Email', maxLength: 254 },
      message: { label: 'Mensaje', maxLength: 2000, rows: 5 },
    },
    messages: {
      missingConfig: 'Falta configurar el formulario. Contacta al administrador del sitio.',
      missingCaptcha: 'Completa la verificación de seguridad antes de enviar.',
      success: '¡Mensaje enviado! Te responderé pronto.',
      error: 'No se pudo enviar el mensaje. Intenta de nuevo.',
      networkError: 'Error de conexión. Comprueba tu red e intenta de nuevo.',
      cooldown: (seconds) => `Espera ${seconds}s`,
    },
  },
};

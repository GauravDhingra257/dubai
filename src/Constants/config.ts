const emailconfig = {
    service: import.meta.env.VITE_EMAILJS_SERVICE,
    template: import.meta.env.VITE_EMAILJS_TEMPLATE,
  };
const key = import.meta.env.VITE_EMAILJS_KEY;

// Add Elfsight app class name from env
const elfsightAppClass = import.meta.env.VITE_ELFSIGHT_APP_CLASS;

export { emailconfig, key, elfsightAppClass };
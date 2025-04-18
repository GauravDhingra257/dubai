const emailconfig = {
    service: import.meta.env.VITE_EMAILJS_SERVICE,
    template: import.meta.env.VITE_EMAILJS_TEMPLATE,
  };
const key = import.meta.env.VITE_EMAILJS_KEY;

// Add Elfsight app class name from env
const elfsightAppClass = import.meta.env.VITE_ELFSIGHT_APP_CLASS;
export const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
export const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
export { emailconfig, key, elfsightAppClass };
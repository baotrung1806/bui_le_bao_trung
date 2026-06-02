import main from "./main.json";

const locales = {
  main
};

function getNested(obj, path) {
  if (!path) return undefined;
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function getTranslation(locale = 'en', key) {
  const base = getNested(locales, locale);
  const val = getNested(base, key);
  return val ?? key;
}

export default locales;

export function availableLocales() {
  return Object.keys(locales);
}

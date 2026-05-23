import main from "./main.json";

const locales = {
  main
};

export function getTranslation(locale = 'en', key) {
  return (locales[locale] && locales[locale][key]) ?? key;
}

export default locales;

export function availableLocales() {
  return Object.keys(locales);
}

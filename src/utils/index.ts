// @ts-ignore - messenger index is a JS aggregator outside `src`
import { getTranslation } from "../../messenger/index.js";

export function useTranslation(locale = "en") {
  return (key: string) => getTranslation(locale, key);
}

import mainData from "../../messenger/main.json";

function getNested(obj: any, path: string) {
  if (!path) return undefined;
  return path.split('.').reduce((acc: any, part: string) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function useData() {
  return (path: string) => {
    const val = getNested((mainData as any).myself ?? mainData, path);
    return val ?? path;
  };
}
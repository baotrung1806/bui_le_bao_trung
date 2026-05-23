// @ts-ignore - messenger index is a JS aggregator outside `src`
import { getTranslation } from "../../messenger/index.js";

export function useTranslation(locale = "en") {
  return (key: string) => getTranslation(locale, key);
}
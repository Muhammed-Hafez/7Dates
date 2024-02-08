import { useParams } from "next/navigation";
import I18n from "../lib/ts-i18n";

// Define the structure of a single translation file
interface TranslationMap {
  [key: string]: string;
}

// Define an object with references to the JSON files
interface Translations {
  [language: string]: TranslationMap;
}

// Import JSON files directly
import en from "../lib/locales/en.json";
import ar from "../lib/locales/ar.json";

const translationFiles: Translations = {
  en: en as TranslationMap,
  ar: ar as TranslationMap,
};

export const useI18n = () => {
  const { locale: requestedLocale } = useParams();

  // Treat "en" as the default language if no locale is specified
  const locale = (requestedLocale as string) || "en";

  // Get translations directly from the imported JSON file
  const translations: TranslationMap = translationFiles[locale] || {};

  // Create an instance of I18n with the detected language and translations
  const i18n = new I18n(locale, { [locale]: translations });

  return {
    t: (key: string) => i18n.translate(key),
  };
};

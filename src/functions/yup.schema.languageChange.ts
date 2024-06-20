import { languageEnum } from "@type/global.types";

export const getMultiLanguageMessage = (lang: languageEnum, messages: Record<languageEnum, string>) =>
    messages[lang] || 'Invalid input'
  
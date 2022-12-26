import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  debug: true,
  fallbackLng: 'en',
  saveMissing: true,
});

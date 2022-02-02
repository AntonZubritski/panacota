import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../src/localization/ru.json';
import en from '../src/localization/en.json';

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: ['en', 'ru'],
  returnObjects: true,
});

export default i18n;

import {
  createContext,
  PropsWithChildren,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import i18n from '../../i18n';
import { AppLanguage } from '../../constants/enums';

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: AppLanguage.Russian,
  setLanguage: () => null,
});

const { Provider } = LanguageContext;

const LanguageContextProvider = (props: PropsWithChildren<{ children: ReactNode }>) => {
  const [language, setLanguage] = useState<string>(AppLanguage.Russian);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <Provider value={{ language, setLanguage }}>{props.children}</Provider>;
};

export const language = i18n.services;

export default LanguageContextProvider;

export function useLanguageCtx() {
  return useContext(LanguageContext);
}

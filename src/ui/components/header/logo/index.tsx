import { useTranslation } from 'react-i18next';
import LogoIcon from '../../../icons/logoIcon';
import './styles.scss';

const Logo = () => {
  const { t } = useTranslation('translation');

  return (
    <div className="logo">
      <LogoIcon />
      <div className="logo__text">
        <div className="logo__text-line-first">{t('logo.lineFirst')}</div>
        <div className="logo__text-line-second">{t('logo.lineSecond')}</div>
      </div>
    </div>
  );
};
export default Logo;

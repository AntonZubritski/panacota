import { useTranslation } from 'react-i18next';
import './styles.scss';

const Banner = () => {
  const { t } = useTranslation('translation');

  return (
    <div className="banner">
      <div className="banner__text">
        <div>{t('banner.text')}</div>
        <div className="banner__average-button">
          <div className="banner__average-button__average">{t('banner.average')}</div>
          <div className="banner__button">
            <div>{t('banner.button')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

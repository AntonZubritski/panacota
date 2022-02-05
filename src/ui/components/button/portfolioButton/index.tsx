import { useTranslation } from 'react-i18next';
import './styles.scss';

const PortfolioButton = () => {
  const { t } = useTranslation('translation');

  return (
    <div className="prtfolio-button">
      <div className="prtfolio-button__text">{t('buttons.portfolio')}</div>
    </div>
  );
};
export default PortfolioButton;

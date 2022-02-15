import { useTranslation } from 'react-i18next';
import Gallery from '../../common/gallery';
import TabsPortfolio from './tabs';
import './styles.scss';


const PortfolioBlock = () => {
  const { t } = useTranslation('translation');
  
  return (
    <div className="portfolio">
      <div className="portfolio__title">{t('portfolio.title')}</div>
      <TabsPortfolio />
      <Gallery />
    </div>
  );
};
export default PortfolioBlock;

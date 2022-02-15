import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

interface TabsType {
  title: string;
}

const TabsPortfolio = () => {
  const [active, setActive] = useState<number>(0);
  const { t } = useTranslation('translation');

  const tabs: TabsType[] = t('portfolio.tabs');
  const tabsElement = tabs.map((tab, key) => (
    <div
      className={`tab ${active === key ? 'active' : 'disactive'}`}
      onClick={() => setActive(key)}
      key={tab.title}>
      {tab.title}
    </div>
  ));

  return <div className="tabs-portfolio">{tabsElement}</div>;
};
export default TabsPortfolio;

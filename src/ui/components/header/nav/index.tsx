import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const NavMenu = () => {
  const [active, setActive] = useState<string>();
  const { t } = useTranslation('translation');

  const arr = [
    { name: t('navButtons.services') },
    { name: t('navButtons.portfolio') },
    { name: t('navButtons.ourClients') },
    { name: t('navButtons.Contacts') },
  ];

  return (
    <div className="nav-menu">
      {arr.map((item) => (
        <div
          key={item.name}
          className={`nav-menu__item nav-menu__item${
            active === item.name ? '-active' : '-disactive'
          }`}
          onClick={() => setActive(item.name)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default NavMenu;

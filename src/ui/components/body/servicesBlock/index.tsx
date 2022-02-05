import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useOnClickOutside from '../../../../hooks/useOutsideClick';
import LinksIcons from '../../../icons/linksIcons';
import VideoBlock from '../../common/videoBlock';
import './styles.scss';

interface LinksTypes {
  title: string;
  description: string;
}

const ServicesBlock = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation('translation');

  const links: LinksTypes[] = t('services.links');
  const hundler = () => {
    setOpen(null);
  };

  useOnClickOutside(ref, hundler);

  const linksElements = links.map((item, key) => {
    const switchStyle = open === key ? 'open' : 'closed';
    return (
      <div
        className="link-element"
        onBlur={() => setOpen(10)}
        key={item.title}
        onClick={() => setOpen(key)}>
        <div className={`link-element__title ${switchStyle}`}>
          <span>{item.title}</span>
          <div className={`link-element__title-icon ${switchStyle}`}>
            <LinksIcons active={open === key} />
          </div>
        </div>
        <div className={`link-element__descr ${switchStyle}`}>{item.description}</div>
      </div>
    );
  });

  return (
    <div className="services">
      <div className="services__video-block">
        <VideoBlock />
      </div>
      <div className="services__information">
        <div className="services__information-title">{t('services.title')}</div>
        <div className="services__information-links" ref={ref}>
          {linksElements}
        </div>
      </div>
    </div>
  );
};
export default ServicesBlock;

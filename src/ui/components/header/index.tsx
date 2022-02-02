import Banner from './banner';
import NavMenu from './nav';
import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__background-color" />
      <div className="header__background-mask" />
      <div className="header__bar">
        LOGO
        <NavMenu />
      </div>
      <Banner />
    </div>
  );
};
export default Header;

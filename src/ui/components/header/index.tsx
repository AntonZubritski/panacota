import Banner from './banner';
import Logo from './logo';
import NavMenu from './nav';
import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__background-color" />
      <div className="header__background-mask" />
      <div className="header__bar">
        <Logo />
        <NavMenu />
      </div>
      <Banner />
    </div>
  );
};
export default Header;

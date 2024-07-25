import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { ButtonTheme, HeaderBox, Img, Main } from './styles';
import iconSun from '../../assets/sun.svg';
import iconMoon from '../../assets/moon.svg';

type HeaderType = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

function Header({ toggleTheme, isDarkTheme }: HeaderType) {
  return (
    <>
      <HeaderBox>
        <Img src={ logo } alt="logo" />
        <ButtonTheme onClick={ toggleTheme } data-testid="theme">
          <img src={ isDarkTheme ? iconSun : iconMoon } alt="Toggle theme" />
        </ButtonTheme>
      </HeaderBox>
      <Main data-testid="main">
        <Outlet />
      </Main>
    </>
  );
}

export default Header;

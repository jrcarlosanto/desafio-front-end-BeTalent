import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { HeaderBox, Img } from './styles';

function Header() {
  return (
    <>
      <HeaderBox>
        <Img src={ logo } alt="logo" />
      </HeaderBox>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;

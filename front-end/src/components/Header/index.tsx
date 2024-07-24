import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { HeaderBox, Img, Main } from './styles';
 
function Header() {
  return (
    <>
      <HeaderBox>
        <Img src={ logo } alt="logo" />
      </HeaderBox>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
 
export default Header;
import { Link } from 'react-router-dom';
import { Main } from './styles';
import faceBlack from '../../assets/sad-face-black.svg';
import faceWhite from '../../assets/sad-face-white.svg';
import { getTheme } from '../../utils/theme';

function NotFound() {
  const theme = getTheme() === 'dark';

  return (
    <Main>
      { theme
        ? <img src={ faceWhite } alt="face" />
        : <img src={ faceBlack } alt="face" />}
      <h1>OOPS!</h1>
      <h2>Erro 404 Página não Encontrada</h2>
      <Link to="/">Voltar</Link>
    </Main>
  );
}

export default NotFound;

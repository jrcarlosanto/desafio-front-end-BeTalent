import { Route, Routes } from 'react-router-dom';
import Initial from './pages/Ininital';
import Header from './components/Header';
import { GlobalStyle } from './styles/global-styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Header /> }>
          <Route index element={ <Initial /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;

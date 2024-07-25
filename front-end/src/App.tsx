import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Initial from './pages/Ininital';
import Header from './components/Header';
import { GlobalStyle } from './styles/global-styles';
import { getTheme, setTheme } from './utils/theme';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme() === 'dark');

  const toggleTheme = () => {
    if (isDarkTheme) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    setIsDarkTheme((prev:boolean) => !prev);
  };

  return (
    <ThemeProvider theme={ isDarkTheme ? dark : light }>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={ <Header
            toggleTheme={ toggleTheme }
            isDarkTheme={ isDarkTheme }
          /> }
        >
          <Route index element={ <Initial /> } />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

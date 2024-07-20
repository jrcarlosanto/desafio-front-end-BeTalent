import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('<Header />', () => {
  it('Verificar se o header tem a imagem.', async () => {
    renderWithRouter(<App />, { route: '/' });
    const img = await screen.findByAltText('logo');

    expect(img).toBeInTheDocument();
  });
});

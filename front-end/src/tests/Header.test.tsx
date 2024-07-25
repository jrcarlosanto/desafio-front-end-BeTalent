import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import { employees } from './mocks/employees';

describe('<Header />', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => employees,
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Verificar se o header tem a imagem.', async () => {
    renderWithRouter(<App />, { route: '/' });
    const img = await screen.findByAltText('logo');

    expect(img).toBeInTheDocument();
  });

  it('Verificar se o header tem o botão para mudar de tema.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const theme = await screen.findByTestId('theme');

    expect(localStorage.getItem('theme')).toBe('light');

    await user.click(theme);

    expect(localStorage.getItem('theme')).toBe('dark');

    await user.click(theme);

    expect(localStorage.getItem('theme')).toBe('light');
  });
});

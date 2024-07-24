import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import { vi } from 'vitest';
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
});

import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';

describe('<Initial />', () => {
  it('Verificar se o Initial renderiza corretamente.', async () => {
    renderWithRouter(<App />, { route: '/' });
    const title = await screen.findByText('Funcionários');
    const input = await screen.findByRole('textbox');
    const searchImg = await screen.findByAltText('search');

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(searchImg).toBeInTheDocument();
  });

  it('Verificar se o input do Initial tem o valor digitado no input.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const input = await screen.findByRole('textbox') as HTMLInputElement;
    const searchImg = await screen.findByAltText('search');

    await user.type(input, 'text');
    expect(input.value).toBe('text');
    expect(searchImg).not.toBeInTheDocument();

    await user.type(input, '{backspace}'.repeat(input.value.length));
    waitFor(() => {
      expect(searchImg).toBeInTheDocument();
    });
  });
});

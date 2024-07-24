import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import { employees, employeesFormated, employeesFormatedForJob, employeesFormatedForJobMobile, employeesFormatedForPhone, employeesFormatedForPhoneMobile, employeesFormatedMobile } from './mocks/employees';
import { vi } from 'vitest';

describe('<Initial />', () => {
  const originalWidth = window.innerWidth;
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => employees,
    } as Response);

  });

  afterEach(() => {
    vi.restoreAllMocks();
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalWidth,
    });
  });

  const head = ['FOTO', 'NOME', 'CARGO', 'DATA DE ADMISSÃO', 'TELEFONE'];
  const headModbile = ['FOTO', 'NOME'];
  
  it('Verificar se o Initial renderiza corretamente.', async () => {
    renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const title = await screen.findByText('Funcionários');
    const input = await screen.findByRole('textbox');
    const searchImg = await screen.findByAltText('search');
    const tableHead = await screen.findAllByTestId('head');
    const tableBody = await screen.findAllByTestId('body');
    
    const tableHeadElements = tableHead.map((element) => element.textContent);
    const tableBodyElements = tableBody.map((element) => element.textContent);

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(searchImg).toBeInTheDocument();
    expect(tableHeadElements).toHaveLength(1);
    expect(tableBodyElements).toHaveLength(9);

    expect(head.join().replace(/,/g, '')).toBe(tableHeadElements[0])
    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormated[index])
    });
  });

  it('Verificar se o input do Initial tem o valor digitado no input.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const input = await screen.findByRole('textbox') as HTMLInputElement;
    const searchImg = await screen.findByAltText('search');

    await user.type(input, 'text');
    expect(input.value).toBe('text');
    expect(searchImg).not.toBeInTheDocument();

    await user.type(input, '{backspace}'.repeat(input.value.length));
    
    const searchImgShow = await screen.findByAltText('search');
    waitFor(() => {
     expect(searchImgShow).toBeInTheDocument();
    });
  });

  it('Verificar se o componente renderiza a largura da janela do navegador de tamanhos diferentes.', () => {
    Object.defineProperty(window, 'innerWidth', { value: 800 });
  
    renderWithRouter(<App />);
  
    expect(window.innerWidth).toBe(800);
  
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    window.dispatchEvent(new Event('resize'));
  
    renderWithRouter(<App />);
  
    waitFor(() => {
      expect(window.innerWidth).toBe(500);
    });
  });

  it('Verificar se ao filtrar ta tabela por nome, ela funciona corretamente.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, 'jo');
    
    const tableBody = await screen.findAllByTestId('body');
    
    const tableBodyElements = tableBody.map((element) => element.textContent);

    expect(tableBodyElements).toHaveLength(1);

    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormated[index])
    });
  });

  it('Verificar se ao filtrar ta tabela por emprego, ela funciona corretamente.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, 'back');
    
    const tableBody = await screen.findAllByTestId('body');
    
    const tableBodyElements = tableBody.map((element) => element.textContent);

    expect(tableBodyElements).toHaveLength(4);

    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormatedForJob[index])
    });
  });

  it('Verificar se ao filtrar ta tabela por telefone, ela funciona corretamente.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, '23456');
    
    const tableBody = await screen.findAllByTestId('body');
    
    const tableBodyElements = tableBody.map((element) => element.textContent?.trim());

    expect(tableBodyElements).toHaveLength(5);

    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormatedForPhone[index])
    });
  });

  it('Verificar se ao filtrar ta tabela por algo que não tenha correspondência aparece a frase Nenhum resultado encontrado.', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, 'luiz23');
    
    const tableBody = await screen.findByText('Nenhum resultado encontrado.');
    expect(tableBody).toBeInTheDocument();
  });

  it('Verificar se o Initial renderiza corretamente na versão Mobile.', async () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const title = await screen.findByText('Funcionários');
    const input = await screen.findByRole('textbox');
    const searchImg = await screen.findByAltText('search');
    const tableHead = await screen.findAllByTestId('head');
    const tableBody = await screen.findAllByTestId('body');
    
    const tableHeadElements = tableHead.map((element) => element.textContent);
    const tableBodyElements = tableBody.map((element) => element.textContent);

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(searchImg).toBeInTheDocument();
    expect(tableHeadElements).toHaveLength(1);
    expect(tableBodyElements).toHaveLength(9);

    expect(headModbile.join().replace(/,/g, '')).toBe(tableHeadElements[0])
    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormatedMobile[index])
    });
  });

  it('Verificar se ao filtrar ta tabela por nome, ela funciona corretamente na versão Mobile.', async () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, 'jo');
    
    const tableBody = await screen.findAllByTestId('body');
    
    const tableBodyElements = tableBody.map((element) => element.textContent);

    expect(tableBodyElements).toHaveLength(1);

    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormatedMobile[index])
    });
  });

  it('Verificar se ao filtrar ta tabela por emprego, ela funciona corretamente na versão Mobile.', async () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, 'back');
    
    const tableBody = await screen.findAllByTestId('body');
    
    const tableBodyElements = tableBody.map((element) => element.textContent);

    expect(tableBodyElements).toHaveLength(4);

    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormatedForJobMobile[index])
    });
  });

  it('Verificar se ao filtrar ta tabela por telefone, ela funciona corretamente na versão Mobile.', async () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, '23456');
    
    const tableBody = await screen.findAllByTestId('body');
    
    const tableBodyElements = tableBody.map((element) => element.textContent?.trim());

    expect(tableBodyElements).toHaveLength(5);

    tableBodyElements.forEach((elem, index) =>{
      expect(elem).toBe(employeesFormatedForPhoneMobile[index])
    });
  });

  it('Verificar se ao filtrar ta tabela por algo que não tenha correspondência aparece a frase Nenhum resultado encontrado na versão Mobile.', async () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    const { user } = renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const input = await screen.findByRole('textbox');
    
    await user.type(input, 'luiz23');
    
    const tableBody = await screen.findByText('Nenhum resultado encontrado.');
    expect(tableBody).toBeInTheDocument();
  });

  it('Verificar se o accodion esta funcionando na versão Mobile.', async () => {
    Object.defineProperty(window, 'innerWidth', { value: 500 });
    const { user } =  renderWithRouter(<App />, { route: '/' });
    const loading = await screen.findByAltText("loading");

    await waitFor(()=>{
      expect(loading).not.toBeInTheDocument();
    })

    const informations = await screen.findAllByTestId('information');
    const accodions = await screen.findAllByRole('button');
    
    informations.forEach((elem)=>{
      expect(elem).not.toBeVisible();
    });

    await user.click(accodions[0]);
    await waitFor(() =>{
      expect(informations[0]).toBeVisible();
    })
  
    informations.slice(1).forEach((elem)=>{
      expect(elem).not.toBeVisible();
    });

    await user.click(accodions[0]);
    informations.forEach((elem)=>{
      expect(elem).not.toBeVisible();
    });
  });
});

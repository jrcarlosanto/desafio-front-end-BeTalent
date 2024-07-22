import { useState } from 'react';
import Input from '../../components/Input';
import { Section, Title } from './styles';
import serach from '../../assets/search.svg';

function Initial() {
  const [input, setInput] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  return (
    <Section>
      <Title>Funcionários</Title>
      <Input
        type="text"
        name="input"
        id="input"
        value={ input }
        placeholder="Pesquisar"
        onChange={ handleChangeInput }
        width="287px"
        image={ serach }
      />
    </Section>
  );
}

export default Initial;

import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import { Container, Section, SectionTable, Title } from './styles';
import serach from '../../assets/search.svg';
import Table from '../../components/Table';
import { getEmployees } from '../../services/getEmployees';
import { ListOfEmployees } from '../../types';
import MobileTable from '../../components/MobileTable';
import Loading from '../../components/Loading';

function Initial() {
  const [input, setInput] = useState('');
  const [fixedEmployees, setFixedEmployees] = useState<ListOfEmployees>([]);
  const [employees, setEmployees] = useState<ListOfEmployees>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEmployees().then((response) => {
      setFixedEmployees(response);
      setEmployees(response);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    filterEmployees(value);
  };

  const head = ['FOTO', 'NOME', 'CARGO', 'DATA DE ADMISSÃO', 'TELEFONE'];
  const headModbile = ['FOTO', 'NOME'];

  const filterEmployees = (value: string) => {
    setLoading(true);
    const search = value.toLocaleLowerCase();
    if (search.length > 0) {
      const filter = fixedEmployees
        .filter(({ name, job, phone }) => name.toLocaleLowerCase().includes(search)
      || job.toLocaleLowerCase().includes(search) || phone.includes(search));
      setEmployees(filter);
    } else {
      setEmployees(fixedEmployees);
    }
    setLoading(false);
  };

  return (
    <>
      <Section>
        <Title>Funcionários</Title>
        <Input
          type="text"
          name="input"
          id="input"
          value={ input }
          placeholder="Pesquisar"
          onChange={ handleChangeInput }
          width={ window.innerWidth > 600 ? '287px' : '335px' }
          image={ serach }
        />
      </Section>
      { loading && (<Loading />) }
      { !loading && (
        <SectionTable>
          { windowWidth > 600 && (
            <Table
              head={ head }
              data={ employees }
            />
          )}
          { windowWidth <= 600 && (
            <MobileTable
              head={ headModbile }
              data={ employees }
            />
          )}
        </SectionTable>
      )}
    </>
  );
}

export default Initial;

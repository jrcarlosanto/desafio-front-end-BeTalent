import { formatDate, formatPhone } from '../../services/formatFunctions';
import { ListOfEmployees } from '../../types';
import { Container, Img, TableElemt, Td, Th, Thead, TrBody } from './styles';

type TableType = {
  head: string[];
  data: ListOfEmployees;
};

function Table({ head, data }: TableType) {
  return (
    <Container>
      {data && (
        <TableElemt>
          <Thead>
            <tr data-testid="head">
              {head.map((item, index) => (
                <Th key={ index }>{ item }</Th>
              ))}
            </tr>
          </Thead>
          <tbody>
            {data.map((item) => (
              <TrBody key={ item.id } data-testid="body">
                <Td>
                  <Img src={ item.image } alt={ item.image } />
                </Td>
                <Td>{item.name}</Td>
                <Td>{item.job}</Td>
                <Td>{formatDate(item.admission_date)}</Td>
                <Td>{formatPhone(item.phone)}</Td>
              </TrBody>
            ))}
            { data.length === 0 && (
              <TrBody>
                <Td colSpan={ 5 }>Nenhum resultado encontrado.</Td>
              </TrBody>)}
          </tbody>
        </TableElemt>
      )}
    </Container>
  );
}

export default Table;

import { ListOfEmployees } from '../../types';
import elipse from '../../assets/elipse.svg';
import Accordion from '../Accordion';
import { formatDate, formatPhone } from '../../services/formatFunctions';
import { Img, TableElemt, Td, Th, Thead, Tr, TrHead } from './styles';

type TableType = {
  head: string[];
  data: ListOfEmployees;
};

function MobileTable({ head, data }: TableType) {
  return (
    <div>
      {data && (
        <TableElemt>
          <Thead>
            <TrHead data-testid="head">
              {head.map((item, index) => (
                <Th key={ index }>{item}</Th>
              ))}
              <Th>
                <Img src={ elipse } alt="elipse" />
              </Th>
            </TrHead>
          </Thead>
          <tbody>
            {data.map((item) => (
              <Tr key={ item.id }>
                <td colSpan={ data.length } data-testid="body">
                  <Accordion
                    key={ item.id }
                    id={ item.id }
                    name={ item.name }
                    job={ item.job }
                    admission_date={ formatDate(item.admission_date) }
                    phone={ formatPhone(item.phone) }
                    image={ item.image }
                  />
                </td>
              </Tr>
            ))}
            { data.length === 0 && (
              <Tr>
                <Td colSpan={ data.length }>Nenhum resultado encontrado.</Td>
              </Tr>)}
          </tbody>
        </TableElemt>
      )}
    </div>
  );
}

export default MobileTable;

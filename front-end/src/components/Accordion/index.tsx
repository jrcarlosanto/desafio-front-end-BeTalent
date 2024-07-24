import { useState } from 'react';
import { Employee } from '../../types';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import { Img, Button, Card, Infomations, Infomation, H3Inf, H2Title,
  H3InfHead } from './styles';
 
function Accordion({ name, job, admission_date, phone, image }: Employee) {
  const [isVisible, setIsVisible] = useState(false);
 
  const showDetails = () => {
    setIsVisible(!isVisible);
  };
 
  return (
    <Card>
      <Button onClick={ showDetails }>
        <Img src={ image } alt={ name } />
        <H3InfHead>{ name}</H3InfHead>
        <img src={ isVisible ? arrowUp : arrowDown } alt="arrow" />
      </Button>
      <Infomations
        style={ { display: isVisible ? 'block' : 'none' } }
        data-testid="information"
      >
        <Infomation>
          <H2Title>Cargo</H2Title>
          <H3Inf>{job}</H3Inf>
        </Infomation>
        <Infomation>
          <H2Title>Data de admissão</H2Title>
          <H3Inf>{admission_date}</H3Inf>
        </Infomation>
        <Infomation>
          <H2Title>Telefone</H2Title>
          <H3Inf>{phone}</H3Inf>
        </Infomation>
      </Infomations>
    </Card>
  );
}
 
export default Accordion;
 
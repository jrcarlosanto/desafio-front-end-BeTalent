import { Container, Img, InputElement } from './styles';
 
type InputType = {
  name: string;
  type: string;
  id: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  image?: string;
};
 
function Input(
  { name, id, type, value, placeholder = '', onChange, width = '287px',
    image = '' }: InputType,
) {
  return (
    <Container>
      <InputElement
        type={ type }
        id={ id }
        name={ name }
        value={ value }
        placeholder={ placeholder }
        onChange={ (event) => onChange(event) }
        width={ width }
      />
      { value.length === 0 && image?.length !== 0 && (
        <Img src={ image } alt="search" />
      )}
    </Container>
  );
}
 
export default Input;
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const InputElement = styled.input`
  width: ${(props) => props.width || '287px'};
  height: 48px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid rgba(223, 223, 223, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
`;

export const Img = styled.img`
  position: absolute;
  right: 10px;
  top: 12px;
`;

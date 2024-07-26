import styled from 'styled-components';

export const TableElemt = styled.table`
  width: 335px;
  border-collapse: collapse;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden; 
  margin-bottom: 40px;
`;

export const Thead = styled.thead`
  height: 47px;
  top: 172px;
  left: 32px;
  padding: 14px 14px 14px 14px;
  gap: 125px;
  border-radius: 8px 8px 0px 0px;
  opacity: 0px;
  background: linear-gradient(180deg, #5A84C0 0%, #594ED2 100%);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrHead = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
 
  & > *:nth-child(2) {
    margin-left: -18px;
  }
`;

export const Img = styled.img`
  margin-right: 9px;
`;

export const Th = styled.th`
  color: ${(props) => props.theme.colors.secondaryText};
  height: 19px;
`;

export const Tr = styled.tr`
  width: 100%;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.primary};
`;

export const Td = styled.td`
  height: 50px;
  gap: 0px;
  opacity: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  color: ${(props) => props.theme.colors.primaryText};
  background: ${(props) => props.theme.colors.secondary};
`;

import styled from 'styled-components';
 
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
 
export const TableElemt = styled.table`
  width: 90%;
  border-collapse: collapse;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden; 
`;
 
export const Thead = styled.thead`
  height: 47px;
  top: 172px;
  left: 32px;
  padding: 14px 32px 14px 32px;
  gap: 125px;
  opacity: 0px;
  background: linear-gradient(180deg, #5A84C0 0%, #594ED2 100%);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
`;
 
export const Th = styled.th`
  color: rgba(255, 255, 255, 1);
  height: 19px;
  top: 14px;
  left: 32px;
  gap: 133px;
  margin-left: 0px;
  margin-right: 0px;
`;
 
export const Img = styled.img`
  width: 34px;
  height: 34px;
  top: 8px;
  left: 32px;
  gap: 0px;
  opacity: 0px;
  border-radius: 20px;
`;
 
export const TrBody = styled.tr`
  height: 49px;
  top: 400px;
  gap: 0px;
  opacity: 0px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
`;
 
export const Td = styled.td`
  height: 19px;
  top: 15px;
  left: 156px;
  gap: 0px;
  opacity: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: center;
  color: rgba(28, 28, 28, 1);
  border-bottom: 1px solid #ddd;
`;
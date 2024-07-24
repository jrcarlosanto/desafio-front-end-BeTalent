import styled from 'styled-components';
 
export const Card = styled.div`
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
`;
 
export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  transition: 0.4s;
  height: 60px;
  top: 20px;
  left: 20px;
  padding: 13.5px 12px 12.5px 14px;
  gap: 70px;
  opacity: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border: none;
`;
 
export const Img = styled.img`
  width: 34px;
  height: 34px;
  top: 8px;
  left: 32px;
  gap: 0px;
  opacity: 0px;
  border-radius: 20px;
  margin-left: 2px;
`;
 
export const Infomations = styled.div`
  padding: 20px 15px;
  margin-top: -10px;
`;
 
export const Infomation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #DFDFDF;
  margin-bottom: 5px;
`;
 
export const H2Title = styled.h2`
  font-size: 16px;
  font-weight: 550;
  line-height: 18.75px;
  color: rgba(28, 28, 28, 1);
  padding-top: 8px;
`;
 
export const H3InfHead = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  color: rgba(28, 28, 28, 1);
`;
 
export const H3Inf = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: right;
  color: rgba(28, 28, 28, 1);
`;
 
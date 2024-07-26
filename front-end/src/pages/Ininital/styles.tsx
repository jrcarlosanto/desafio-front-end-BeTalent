import styled from 'styled-components';

export const Section = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
  max-width: 1300px;
 
  @media (max-width: 600px){
    width: 335px;
  }

  @media (min-width: 1447px){
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 139px;
  height: 28px;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.13px;
  text-align: left;
  color: ${(props) => props.theme.colors.primaryText};

`;

export const SectionTable = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  max-width: 1300px;
`;

import styled from 'styled-components';

export const HeaderBox = styled.header`
  height: 60px;
  padding-left: 32px;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
  padding-top: 12.8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
    height: 35px;
    width: 44px;
`;

export const ButtonTheme = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
  margin-right: 40px;
  
  @media (max-width: 430px) {
    margin-right: 15px;
  }

  & :hover {
    background-color: ${(props) => props.theme.colors.backgroundHeader};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

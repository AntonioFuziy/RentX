import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 45px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.grayPrimary};

  cursor: pointer;
  transition: background-color 0.3s;

  :hover{
    background-color: ${({ theme }) => theme.colors.lightRedTheme};
  }
`;

export const ButtonText = styled.p`
  font-size: 16px;
  color: #000;
`

export const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`

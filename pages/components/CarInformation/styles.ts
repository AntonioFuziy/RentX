import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const GroupButtons = styled.div`
  margin-top: 30px;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Button = styled.div`
  width: 45%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  color: #212121;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: #dbdbdb;
  transition: border-color 0.3s;
  cursor: pointer;

  :hover{
    border-color: ${({ theme }) => theme.colors.redTheme};
  }
`

export const Description = styled.p`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin-top: 20px;
  line-height: 20px;

  font-size: 14px;
  color: #777;
`

export const BottomButton = styled.div`
  width: 100%;
  max-width: 400px;
  height: 60px;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.lightRedTheme};
  transition: background-color 0.3s;

  :hover{
    background-color: ${({ theme }) => theme.colors.redTheme};
  }
`
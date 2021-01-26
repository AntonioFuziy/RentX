import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60px;
  border-radius: 4px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grayPrimary};
`;

export const TopIcon = styled.img`
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 4px 0 0 0;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.blackPrimary};
`

export const BottomIcons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0 0 0 4px;
  height: calc(100% - 60px);
  width: 60px;

  background-color: ${({ theme }) => theme.colors.grayPrimary};
`

export const Home = styled.img`
  margin-top: 50px;
  width: 20px;
  height: 20px;
  transition: background-color 0.3s;
  cursor: pointer;
`

export const Car = styled.img`
  margin-top: 70px;
  width: 20px;
  height: 20px;
  transition: background-color 0.3s;
  cursor: pointer;
`

export const User = styled.img`
  margin-top: 70px;
  width: 20px;
  height: 20px;
  transition: background-color 0.3s;
  cursor: pointer;
`
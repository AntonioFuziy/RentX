import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  width: calc(100% - 60px);
  height: 58px;
  left: 60px;
  top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: #dbdbdb;
`;

export const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 40%;
`

export const BackIcon = styled.img`
  width: 9px;
  height: 14px;
  cursor: pointer;
`

export const CarName = styled.p`
  font-weight: 500;
  font-size: 24px;
`

export const Price = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.redTheme};
`
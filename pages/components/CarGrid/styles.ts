import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: calc(100% - 60px);
  height: calc(100vh - 60px);
`;

export const CarImage = styled.img`
  padding: 50px;
  max-width: 750px;
  width: 100%;
  height: auto;
`


export const RightContent = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f0f0f0;
`

export const ButtonGroup = styled.div`
  width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`
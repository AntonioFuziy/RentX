import React from 'react';

import { Container, Content, BackIcon, CarName, Price } from './styles';

const TopHeader: React.FC = () => {
  return (
    <Container>
      <Content>
        <BackIcon src={"./img/backIcon.png"}/>
        <CarName>Audi Q3</CarName>
        <Price>R$ 120/dia</Price>
      </Content>
    </Container>
  );
}

export default TopHeader;
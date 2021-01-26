import React from 'react';

import { Container, TopIcon, BottomIcons, Home, Car, User } from './styles';

const LeftHeader: React.FC = () => {
  return (
    <Container>
      <TopIcon src={"./img/logo.png"}/>
      <BottomIcons>
        <Home src={"./img/home.svg"}/>
        <Car src={"./img/car.svg"}/>
        <User src={"./img/user.svg"}/>
      </BottomIcons>
    </Container>
  );
}

export default LeftHeader;
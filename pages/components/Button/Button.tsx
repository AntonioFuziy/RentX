import React from 'react';

import { Container, ButtonText, ButtonIcon } from './styles';

const Button: React.FC = ({ text, image }) => {
  return (
    <Container>
      <ButtonIcon src={image}/>
      <ButtonText>{text}</ButtonText>
    </Container>
  )
}

export default Button;
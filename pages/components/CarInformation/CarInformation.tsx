import React from 'react';

import { Container, GroupButtons, Button, Description, BottomButton } from './styles';

const CarInformation: React.FC = () => {
  return (
    <Container>
      <GroupButtons>
        <Button>Sobre o carro</Button>
        <Button>Periodo</Button>
      </GroupButtons>

      <Description>
        Trazendo a nova linguagem de design e tecnologia da familia, o Q3 
        oferece mais espaço interno e nova tela sensível ao toque alem de 
        intens de seguranca e assitencia que irao transformar sua experiencia 
        de direcao.
      </Description>

      <BottomButton>Escolher período de aluguel</BottomButton>
    </Container>
  );
}

export default CarInformation;
import React, { useState } from 'react';

import { Container, RightContent, CarImage, ButtonGroup } from './styles';

import Button from "../Button/Button";
import CarInformation from '../CarInformation/CarInformation';
import SignForm from '../SignForm/SignForm';

const CarGrid: React.FC = (props) => {
  const [signed, setSigned] = useState(true);

  return (
    <Container>
      <CarImage src={"./img/audi.png"}/>
      <RightContent>
        {signed && 
          <>
            <ButtonGroup>
              <Button text={"270km/h"} image={"./img/speed.svg"}/>
              <Button text={"6.8s"} image={"./img/upload.svg"}/>
              <Button text={"Gasolina"} image={"./img/drop.svg"}/>
              <Button text={"Auto"} image={"./img/gear-shift.svg"}/>
              <Button text={"5 pessoas"} image={"./img/user.svg"}/>
              <Button text={"280 HP"} image={"./img/volant.svg"}/>
            </ButtonGroup>
            <CarInformation/>
          </>
        }
        {!signed &&
          <>
            <SignForm/>
          </>
        }
      </RightContent>
    </Container>
  );
}

export default CarGrid;
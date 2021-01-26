import { Container } from '../styles/global'

import LeftHeader from './components/LeftHeader/LeftHeader';
import TopHeader from './components/TopHeader/TopHeader';
import CarGrid from './components/CarGrid/CarGrid';

export default function Home() {
  return (
    <Container>
      <LeftHeader/>
      <TopHeader/>
      <CarGrid/>
    </Container>
  )
}

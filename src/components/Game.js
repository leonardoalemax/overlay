import React from 'react';
import ResidentEvil3 from '../games/resident-evil-3';
import { Container, Head, Display, Quests, Quest, Custom } from './Game.style';

const Stream = () => {
  return <Container>
    <Head>
      <Display><img src="./game.png" alt="name" /></Display>
      <Quests>
        <h3>QUESTS</h3>
        <Quest>
          <img src="./trophie1.png" alt="name" />
          <h3>Minimalist</h3>
        </Quest>
        <Quest>
          <img src="./trophie2.png" alt="name" />
          <h3>I Might Need These Later!</h3>
        </Quest>
      </Quests>
    </Head>
    <Custom>
      <ResidentEvil3></ResidentEvil3>
    </Custom>
  </Container>
}

export default Stream;
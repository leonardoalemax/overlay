import React from 'react';
import { Container, Head, Display, Quests, Quest } from './Info.style';

const Info = () => {
  return <Container>
    <Head>
      <Display><img src="./logo-og.png" alt="name" /></Display>
      <Quests>
        <h3>OBJETIVOS</h3>
        <Quest>
          <h3>Criar Overlay de stream que mostra o que esta tocando no spotify</h3>
        </Quest>
        <h3>COMO ? </h3>
        <Quest>
          <h3> React </h3>
          <h3> Styled Components </h3>
          <h3> OBS Web overlay </h3>
        </Quest>
        <h3>FAZENDO AGORA: </h3>
        <Quest>
          <h3> Prepararando Git </h3>
        </Quest>
      </Quests>
    </Head>
  </Container>
}

export default Info;
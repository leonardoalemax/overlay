import React from 'react';
import { Blue } from './cumons/themes.style';
import Stream from './components/Stream';
import Info from './components/Info';
import {
  Container
} from './App.style';

function App() {
  return (
    <Blue>
      <Container>
        <Stream></Stream>
        <Info></Info>
      </Container>
    </Blue>
  );
}

export default App;

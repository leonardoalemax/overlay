import React from 'react';
import { Hp } from '../cumons/shared.style';
import axios from 'axios';
import { Container, Timer } from './resident-evil-3.style'

const ResidentEvil3 = () => {
  const [data, setData] = React.useState({
    IGTFormattedString: '00:00:00.231',
    PlayerCurrentHealth: 1400,
    PlayerMaxHealth: 1600
  });

  React.useEffect(() => {
    async function fetchData() {
      const JSON_ADDRESS = '127.0.0.1';
      const JSON_PORT = 7190;
      const JSON_ENDPOINT = `http://${JSON_ADDRESS}:${JSON_PORT}/`;
      const { data } = await axios.get(JSON_ENDPOINT);
      setData(data);
    }

    const interval = setInterval(() => {
      fetchData()
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Container>
    <Timer><span>{data.IGTFormattedString}</span></Timer>
    <h3>HP</h3>

    <Hp current={data.PlayerCurrentHealth}
      max={data.PlayerMaxHealth} ></Hp>
  </Container>
}

export default ResidentEvil3;
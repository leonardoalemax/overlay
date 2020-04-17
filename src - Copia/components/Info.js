import React from 'react';

import { Container, Head, Display, Quests, Quest } from './Info.style';
import axios from 'axios';

const Info = () => {
  const [quests, setQuests] = React.useState([])

  React.useEffect(() => {
    async function fetchQuests() {

      const { data } = await axios.get("http://localhost:3333/quests/", {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setQuests(data.quests);
    }
    fetchQuests()
    const interval = setInterval(() => {
      fetchQuests()
    }, 1000);
    return () => clearInterval(interval);

  }, [])

  return <Container>
    <Head>
      <Display><img src="./logo-og.png" alt="name" /></Display>
      <Quests>
        <h3>OBJETIVOS {quests.length}</h3>
        {
          quests.map((quest) => (<Quest done={quest.done}>
            <h3>{quest.description}</h3>
          </Quest>))
        }
        <h3>COMO ? </h3>
        <Quest>
          <h3> React </h3>
          <h3> Styled Components </h3>
          <h3> OBS Web overlay </h3>
        </Quest>
      </Quests>
    </Head>
  </Container>
}

export default Info;
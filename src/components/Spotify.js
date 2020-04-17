import React from 'react';
import axios from 'axios';
import { Container, Info } from './Spotify.style';

const Spotify = () => {
  const [result, setResult] = React.useState({
    progress_ms: '00000',
    item: {
      name: 'musica de tal',
      album: {
        name: 'album de tal',
        images: [
          {
            url: 'google.com'
          }
        ]
      },
      artists: [
        { name: 'fulano de tal' }
      ]
    }
  });

  React.useEffect(() => {
    async function fetchUserData() {

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer BQBLlyHkyUEr3xxQiDEkN-PxUlBZkWkLQ5w5FYzhR6kq-12ikOgTkvapir8_5dDP9qeMnDOwVcBDZE1xVUijAd3_trrVJC41w-4GAzk46zfSt7wlO3IEAxccc9ZNOfDCneLsURv6euUCr-lXA62Jaw'
        }
      };

      const { data } = await axios.get(
        'https://api.spotify.com/v1/me/player',
        config
      )

      setResult((e) => ({
        ...e,
        ...data
      }));
    }

    const interval = setInterval(() => {
      fetchUserData()
    }, 1000);
    return () => clearInterval(interval);

  }, [])

  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return hrs.toString().padStart(2, '0000') + ':' + mins.toString().padStart(2, '0000') + ':' + secs;
  }


  return <Container>
    <img alt="album-art" src={result.item.album.images[0].url}></img>
    <Info>
      <h3>{result.item.name}  </h3>
      <p>{result.item.artists[0].name} / {result.item.album.name} </p>
      <span>{msToTime(result.progress_ms)}</span>
    </Info>
  </Container>
}

export default Spotify;
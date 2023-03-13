import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

function Spotify() {
  const spotifyApi = new SpotifyWebApi({
  clientId: 'c16a2fac5e35473eb49f0a35c4a39e83',
  clientSecret: '68426e103d19418aa26844f11953cdf8',
  });

  const [trackUri, setTrackUri] = useState('https://open.spotify.com/playlist/37i9dQZF1DZ06evO1sZ212?si=69e3840aa74548c1');

useEffect(() => {
  spotifyApi.search('track:Somebody That I Used to Know', ['track'])
    .then((response) => {
      const trackId = response.tracks.items[0].id;
      const trackUri = `spotify:track:${trackId}`;
      setTrackUri(trackUri);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  return(
    <iframe
    className='h-[200px] md:h-[80px] m-0'
    src={`https://open.spotify.com/embed?uri=${trackUri}`}
    width="100%"/>
  )
}

export default Spotify;

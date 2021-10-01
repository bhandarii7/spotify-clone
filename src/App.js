import React, { useEffect } from 'react'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';
import './App.css';
import Login from './Login';


const spotify = new SpotifyWebApi();

function App() {

  const [ token , dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type:"SET_TOKEN",
        token: _token,
      });


      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>{
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        })
      });

      spotify.getPlaylist('37i9dQZEVXcT5Z27Zu5IGU').then(response =>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

    } 
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <Player/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;

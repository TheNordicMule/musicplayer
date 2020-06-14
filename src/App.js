import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./AudioPlayer";
import parseLyrics from './LyricParser.jsx';
import NavBar from './NavBar.jsx';


class MusicPlayer extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Player />
        <h1>{parseLyrics()}</h1>
      </>
    );
  }
}

export default MusicPlayer;

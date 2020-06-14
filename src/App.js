import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Player from "./AudioPlayer";
// import parseLyrics from './LyricParser.jsx';
// eslint-disable-next-line no-unused-vars
import RabbitLyrics from "rabbit-lyrics";
import NavBar from './NavBar.jsx';
import RabbitPlayer from './RabbitPlayer.jsx';


class MusicPlayer extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <RabbitPlayer />
        {/* <h1>{parseLyrics()}</h1> */}
      </>
    );
  }
}

export default MusicPlayer;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
      </>
    );
  }
}

export default MusicPlayer;

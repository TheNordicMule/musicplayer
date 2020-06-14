import React from "react";
import "./App.css";
import Player from "./AudioPlayer";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

class MusicPlayer extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" className="mx-auto">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Laxis Music Player
          </Navbar.Brand>
        </Navbar>
        <Player />
      </>
    );
  }
}

export default MusicPlayer;

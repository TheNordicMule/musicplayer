import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Player() {
  const Player = () => (
    <AudioPlayer
      autoPlay
      src="http://www.panacherock.com/downloads/mp3/01_Afterlife.mp3"
      // onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
  return <Player />;
}

export default Player;
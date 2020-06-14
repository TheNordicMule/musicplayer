import React from "react";
import parseLyrics from './LyricParser.jsx';

export default function RabbitPlayer() {
  return (
    <>
      <div
        className="rabbit-lyrics"
        data-media="#audio-1"
        data-height="500"
        data-alignment="center"
      >
        {parseLyrics()}
      </div>
      <audio id="audio-1" controls>
        {/* <source src="audio-1.ogg" type="audio/ogg"></source> */}
        <source
          src="http://sd.sycdn.kuwo.cn/5cb26c647edbd0a3e1980ec8fc2f9225/5ee67f31/resource/n1/92/63/258260127.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
    </>
  );
}

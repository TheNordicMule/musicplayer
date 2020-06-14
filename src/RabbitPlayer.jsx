import React from "react";
import parseLyrics from "./LyricParser.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RabbitPlayer() {
  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            {" "}
            <div
              className="rabbit-lyrics"
              data-media="#audio-1"
              data-height="700"
              data-alignment="center"
            >
              {parseLyrics()}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <audio id="audio-1" controls position="center" xs="12">
              {/* <source src="audio-1.ogg" type="audio/ogg"></source> */}
              <source
                src="http://sd.sycdn.kuwo.cn/5cb26c647edbd0a3e1980ec8fc2f9225/5ee67f31/resource/n1/92/63/258260127.mp3"
                type="audio/mpeg"
              ></source>
            </audio>
          </Col>
        </Row>
      </Container>
    </>
  );
}

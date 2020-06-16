import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import RabbitLyrics from "rabbit-lyrics";

export default class RabbitPlayer extends React.Component {
  render() {
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
                {this.props.lyrics}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <audio id="audio-1" controls position="center" xs="12">
                <source src={this.props.music} type="audio/mpeg"></source>
              </audio>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  async componentDidUpdate() {
      const audio = document.getElementById("audio-1");
      try {
        await audio.pause();
        await audio.load();
        await audio.play();
      } catch (e) {
        console.log("The user interrupted the playback");
      }
    }
}

RabbitPlayer.propTypes = {
  music: PropTypes.string,
  lyrics: PropTypes.string,
};

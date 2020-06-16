import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import RabbitLyrics from "rabbit-lyrics";

export default class RabbitPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.mediaRef = React.createRef();
    this.textRef = React.createRef();
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs="12">
              {" "}
              <div
                data-media="lyrics-1"
                data-height="700"
                data-alignment="center"
                ref={this.textRef}
              >
                {this.props.lyrics}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <audio
                id="audio-1"
                controls
                position="center"
                xs="12"
                ref={this.mediaRef}
              >
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

    this.textRef.current.classList.remove("rabbit-lyrics");
    this.textRef.current.classList.remove("rabbit-lyrics--default");
    this.textRef.current.classList.remove("rabbit-lyrics--enabled");
    this.textRef.current.classList.remove("rabbit-lyrics--playing");
    new RabbitLyrics({
      element: this.textRef.current,
      mediaElement: this.mediaRef.current,
      height: 800,
    });
  }

  componentDidMount() {
    new RabbitLyrics({
      element: this.textRef.current,
      mediaElement: this.mediaRef.current,
      height: 800,
    });
  }
}

RabbitPlayer.propTypes = {
  music: PropTypes.string,
  lyrics: PropTypes.string,
};

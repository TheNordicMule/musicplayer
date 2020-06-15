import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { Lrc } from "lrc-kit";
// eslint-disable-next-line no-unused-vars
import RabbitLyrics from "rabbit-lyrics";

export default class RabbitPlayer extends React.Component {
  constructor(props) {
    super(props);
    const music = props.music;
    const lyrics = props.lyrics;
    this.state = { music, lyrics };
  }

  render() {
    const lrc = Lrc.parse(this.state.lyrics);
    const text = lrc.toString({ combine: false });
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
                {text}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <audio id="audio-1" controls position="center" xs="12">
                <source src={this.state.music} type="audio/mpeg"></source>
              </audio>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  async componentDidUpdate() {
    if (this.state.music === this.props.music) {
      return;
    }
    if (this.state.music !== this.props.music) {
      this.setState({ music: this.props.music });
      const audio = document.getElementById("audio-1");
      try {
        await audio.pause();
        await audio.load();
        await audio.play();
      } catch (e) {
        console.log("The user interrupted the playback");
      }
    }
    if (this.state.lyrics !== this.props.lyrics) {
      this.setState({ lyrics: this.props.lyrics });
    }
  }
}

RabbitPlayer.propTypes = {
  music: PropTypes.string,
  lyrics: PropTypes.string,
};

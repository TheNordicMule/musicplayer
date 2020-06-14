import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { Lrc } from "lrc-kit";

export default class RabbitPlayer extends React.Component {
  constructor(props) {
    super(props);
    const music = props.music;
    this.state={ music };
  }
  render() {
    const lrc = Lrc.parse(this.props.lyrics);
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
                {lrc.toString({ combine: false })}
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
  
  componentDidUpdate() {
    if (this.state.music == this.props.music) {
      return;
    }
    this.setState( { music: this.props.music });
    const audio = document.getElementById('audio-1');
    audio.pause();
    audio.load();
    audio.play();
  }
}



RabbitPlayer.propTypes = {
  music: PropTypes.string,
  lyrics: PropTypes.string,
};

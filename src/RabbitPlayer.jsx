import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { Lrc } from "lrc-kit";

export default class RabbitPlayer extends React.Component {
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
                {/* <source src="audio-1.ogg" type="audio/ogg"></source> */}
                <source src={this.props.music} type="audio/mpeg"></source>
              </audio>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

RabbitPlayer.propTypes = {
  music: PropTypes.string,
  lyrics: PropTypes.string,
};

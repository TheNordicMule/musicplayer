import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleclose = this.handleclose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleclose() {
    this.setState({ showModal: false });
  }

  handleShow() {
    this.setState({ showModal: true });
  }

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

        <Form onSubmit={this.props.handleSubmit}>
          <Form.Row className="align-items-center">
            <Col xs="5">
              <Form.Label htmlFor="music" srOnly>
                Link to the song
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="music"
                placeholder="Link to the song (MPEG filetype, such as a mp3)"
                name="music"
              />
            </Col>
            <Col xs="5">
              <Form.Label htmlFor="lyrics" srOnly>
                Link to the lyrics
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="lyrics"
                name="lyrics"
                placeholder="Link to the lyrics(LRC file)"
              />
            </Col>
            <Col xs="2">
              <Button type="submit" className="mb-2" variant="dark">
                submit
              </Button>
              <Button
                type="reset"
                className="mb-2"
                variant="dark"
                onClick={this.props.resetInitial}
              >
                reset
              </Button>
              <Button
                type="reset"
                className="mb-2"
                variant="dark"
                onClick={this.handleShow}
              >
                Modify Lyrics
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Modal show={this.state.showModal} onHide={this.handleclose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Modify Lyrics</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div>
                <textarea
                  id="exampleFormControlTextarea1"
                  rows="50"
                  cols="100"
                ></textarea>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleclose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleclose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

NavBar.propTypes = {
  handleSubmit: PropTypes.func,
  resetInitial: PropTypes.func,
  changeLyrics: PropTypes.func,
};

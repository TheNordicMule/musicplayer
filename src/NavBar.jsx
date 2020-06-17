import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import TextFormat from "./TextFormat";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, lyrics: this.props.lyrics };
    this.handleclose = this.handleclose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.changeLyrics = this.changeLyrics.bind(this);
  }

  handleclose() {
    this.setState({ showModal: false, lyrics: this.props.lyrics });
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  changeLyrics(e) {
    e.preventDefault();
    this.setState({ lyrics: e.target.value });
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" className="mx-auto">
            Laxis Music Player
          </Navbar.Brand>
        </Navbar>

        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me to change songs or lyrics!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form onSubmit={this.props.handleSubmit}>
                  <Form.Row className="align-items-center">
                    <Col md={{ span: 3, offset: 0 }}>
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

                    <Col md={{ span: 3, offset: 6 }}>
                      <Button type="submit" className="mb-2" variant="dark">
                        Submit
                      </Button>

                      <Button
                        type="reset"
                        className="mb-2"
                        variant="dark"
                        onClick={this.props.resetInitial}
                      >
                        Reset
                      </Button>
                      <Button
                        type="reset"
                        className="mb-2"
                        variant="dark"
                        onClick={this.handleShow}
                      >
                        Modify Lyrics
                      </Button>
                      <TextFormat lyrics={this.props.lyrics}/>
                    </Col>
                  </Form.Row>
                </Form>
                <Modal
                  show={this.state.showModal}
                  onHide={this.handleclose}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modify Lyrics</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form name="editIssue">
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows="30"
                          cols="100"
                          defaultValue={this.props.lyrics}
                          name="modifiedLyrics"
                          onChange={this.changeLyrics}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleclose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={this.props.handleLyricsSubmit}
                      type="submit"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

NavBar.propTypes = {
  handleSubmit: PropTypes.func,
  resetInitial: PropTypes.func,
  changeLyrics: PropTypes.func,
  handleLyricsSubmit: PropTypes.func,
  lyrics: PropTypes.string,
};

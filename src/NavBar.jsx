import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
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
                placeholder="Link to the song"
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
                placeholder="Link to the lyrics"
              />
            </Col>
            <Col xs="2">
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </>
    );
  }
}

NavBar.propTypes={
  handleSubmit: PropTypes.func,
};

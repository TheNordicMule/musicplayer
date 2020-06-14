import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function NavBar() {
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

      <Form>
        <Form.Row className="align-items-center">
          <Col xs="5">
            <Form.Label htmlFor="songLink" srOnly>
              Link to the song
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="songLink"
              placeholder="Link to the song"
            />
          </Col>
          <Col xs="5">
            <Form.Label htmlFor="lyricsLink" srOnly>
              Link to the lyrics
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="lyricsLink"
              placeholder="Link to the lyrics"
            />
          </Col>
          <Col xs="1" />
          <Col xs="1">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
}

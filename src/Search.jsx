import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';

export default function Search() {
  const form = (
    <Form>
      <Form.Row>
        <Col>
          {" "}
          <Form.Control
            type="text"
            placeholder="Enter text you want to search"
          />
        </Col>

        <Col>
          <Button variant="dark" type="submit">
            Search
          </Button>
          <Button variant="dark" type="submit">
            Highlight
          </Button>
          <Button variant="dark" type="submit">
            Revert
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
  return form;
}

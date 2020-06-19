import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function Search() {
  const [searchedText, setSearchedText] = useState("");
  const [highlightedText, setHighlightedText] = useState(null);
  const form = (
    <Form name="searchTable">
      <Form.Row>
        <Col>
          {" "}
          <Form.Control
            name="search"
            type="text"
            placeholder="Enter text you want to search"
            defaultValue={searchedText}
            onChange={handleChange}
          />
        </Col>

        <Col>
          <Button variant="dark" type="submit" onClick={searchLyrics}>
            Search
          </Button>
          <Button variant="dark" type="submit" onClick={highlightLyrics}>
            Highlight
          </Button>
          <Button variant="dark" type="submit" onClick={resetHighlight}>
            Revert highlights
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
  return form;

  function searchLyrics() {

  }

  function highlightLyrics() {

  }

  function resetHighlight() {
    setHighlightedText(null);
  }



  function handleChange() {
      setSearchedText(document.forms.searchTable.search.value);
  }
}

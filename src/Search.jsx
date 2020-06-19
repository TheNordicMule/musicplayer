import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function Search() {
  const input = useRef("");
  const form = (
    <Form name="searchTable">
      <Form.Row>
        <Col>
          {" "}
          <Form.Control
            name="search"
            type="text"
            placeholder="Enter text you want to search"
            defaultValue=""
            ref={input}
          />
        </Col>

        <Col>
          <Button variant="dark" onClick={() => changeLyricsProperty("search")}>
            Search
          </Button>
          <Button
            variant="dark"
            onClick={() => changeLyricsProperty("highlight")}
          >
            Highlight
          </Button>
          <Button variant="dark" onClick={() => changeLyricsProperty("revert")}>
            Revert highlights
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
  return form;

  function changeLyricsProperty(option) {
    const text = input.current.value;
    const divs = document.getElementsByClassName("rabbit-lyrics__line");
    const length = divs.length;
    for (let i = 0; i < length; i++) {
      const div = divs.item(i);
      div.classList.remove("rabbit-lyrics-highlighted");
      div.classList.remove("rabbit-lyrics-searched");
      const lyric = div.innerText;
      if (option === "search" && lyric.includes(text)) {
        div.classList.add("rabbit-lyrics-searched");
      }
      if (option === "highlight") {
          div.classList.add('rabbit-lyrics-highlighted');
      }
    }
  }
}

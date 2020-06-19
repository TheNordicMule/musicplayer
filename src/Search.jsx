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
            Revert All
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
  return form;

  function changeLyricsProperty(option) {
    if (option === "search") {
      revertSearch();
    }
    let text = input.current.value;
    if (option === "revert") {
      revertSearch();
      revertHighlighted();
    }
    const divs = document.getElementsByClassName("rabbit-lyrics__line");
    const length = divs.length;
    for (let i = 0; i < length; i++) {
      const div = divs.item(i);
      if (option === "search" && div.innerHTML.includes(text)) {
        div.innerHTML = div.innerHTML.replace(
          text,
          `<span class="rabbit-lyrics-searched">${text}</span>`
        );
      }
      if (option === "highlight") {
        const selected = window.getSelection();
        console.log(selected);
      }
    }
  }

  function revertSearch() {
    const searched = document.getElementsByClassName("rabbit-lyrics-searched");
    while (searched.length) {
      const div = searched.item(0);
      div.classList.remove("rabbit-lyrics-searched");
    }
  }

  function revertHighlighted() {
    const highlighted = document.getElementsByClassName(
      "rabbit-lyrics-highlighted"
    );

    while (highlighted.length) {
      const div = highlighted.item(0);
      div.classList.remove("rabbit-lyrics-highlighted");
    }
  }
}

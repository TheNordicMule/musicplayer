/* Reference: StackOverflow post */
import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import * as jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import Form from "react-bootstrap/Form";
import { saveAs } from "file-saver";
import removeTimestamp from "./RemoveTimestamp.js";
import Modal from "react-bootstrap/Modal";

export default class TextFormat extends React.Component {
  constructor(props) {
    super(props);
    this.downloadTxtFile = this.downloadTxtFile.bind(this);
    this.downloadPdfFile = this.downloadPdfFile.bind(this);
    this.downloadDocFile = this.downloadDocFile.bind(this);
    //includeLyics: 0 = include 1 = not include
    this.state = { showModal: false, excludeLyrics: 0 };
    this.toggleFalse = this.toggleFalse.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  toggleFalse() {
    this.setState({
      showModal: false,
    });
  }

  toggleShow() {
    this.setState({ showModal: true });
  }

  handleContentChange() {
    console.log(typeof this.state.excludelyrics);
    if (this.state.excludeLyrics === "1") {
      return removeTimestamp(this.props.lyrics);
    } else if (this.state.excludeLyrics === "3") {
      return this.getHighlighted("withoutStamp");
    } else if (this.state.excludeLyrics === "2") {
      return this.getHighlighted("withStamp");
    } else {
      return this.props.lyrics;
    }
  }

  getHighlighted(option) {
    const highlighted = document.getElementsByClassName(
      "rabbit-lyrics-highlighted"
    );
    let doc = "";
    for (let i = 0; i < highlighted.length; i++) {
      const item = highlighted.item(i);
      if (option === "withoutStamp") {
        doc = doc + item.innerText + "\n";
      }
      if (option === "withStamp") {
        const time = item.dataset.start;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const beforeDecimal = Math.floor(seconds / 1);
        const afterDecimal = Math.floor((seconds % 1) / 0.01);
        const timestamp = `[${minutes}.${beforeDecimal}.${afterDecimal}]`;
        doc = doc + timestamp + item.innerText + "\n";
      }
    }
    return doc;
  }

  downloadTxtFile() {
    const content = this.handleContentChange();
    console.log(content);
    const element = document.createElement("a");
    const file = new Blob([content], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "MyFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  downloadPdfFile() {
    const content = this.handleContentChange();
    var doc = new jsPDF();
    doc.setFontSize(5);
    doc.setFont("Helvetica");
    doc.text(content, 10, 10);
    doc.save("MyFile.pdf");
  }

  downloadDocFile() {
    const content = this.handleContentChange();
    const doc = new Document();
    doc.addSection({
      properties: {},
      children: [
        new Paragraph({
          children: [new TextRun(content)],
        }),
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, "MyFile.docx");
    });
  }

  handleChange() {
    this.setState({
      excludeLyrics: document.forms.excludeLyrics.include.value,
    });
  }

  render() {
    return (
      <>
        <Button className="mb-2" variant="dark" onClick={this.toggleShow}>
          Download Document
        </Button>
        <Modal show={this.state.showModal} onHide={this.toggleFalse} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Modify Lyrics</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="excludeLyrics">
              <Form.Label
                className="mr-sm-2"
                htmlFor="inlineFormCustomSelect"
                srOnly
              >
                Preference
              </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
                name="include"
                onChange={this.handleChange}
              >
                <option value="0">Download with Timestamp</option>
                <option value="1">Download without Timestamp</option>
                <option value="2">
                  Download highlighed content with Timestamp
                </option>
                <option value="3">
                  Download highlighted content without Timestamp
                </option>
              </Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="mb-2"
              variant="dark"
              onClick={this.downloadTxtFile}
              type="submit"
            >
              Download txt
            </Button>
            <Button
              className="mb-2"
              variant="dark"
              onClick={this.downloadPdfFile}
              type="submit"
            >
              Download pdf
            </Button>
            <Button
              type="submit"
              className="mb-2"
              variant="dark"
              onClick={this.downloadDocFile}
            >
              Download docx
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

TextFormat.propTypes = {
  lyrics: PropTypes.string,
};

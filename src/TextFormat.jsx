/* Reference: StackOverflow post */
import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import * as jsPDF from "jspdf";


export default class TextFormat extends React.Component {
  constructor(props) {
    super(props);
    this.downloadTxtFile = this.downloadTxtFile.bind(this);
    this.downloadPdfFile = this.downloadPdfFile.bind(this);
  }


  downloadTxtFile() {
    const element = document.createElement("a");
    const content = this.props.lyrics;
    const file = new Blob([content], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  downloadPdfFile() {
    const content = this.props.lyrics;
    var doc = new jsPDF();
    doc.setFontSize(5);
    doc.setFont("Helvetica");
    doc.text(content, 10, 10);
    doc.save("myFile.pdf");
  }

  render() {
    return (
      <>
      <Button className="mb-2" variant="dark" onClick={this.downloadTxtFile}>
        Download txt
      </Button>
      <Button className="mb-2" variant="dark" onClick={this.downloadPdfFile}>
        Download pdf
      </Button>
      </>
    );
  }
}

TextFormat.propTypes = {
  lyrics: PropTypes.string,
};

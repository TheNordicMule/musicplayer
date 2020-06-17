/* Reference: StackOverflow post */
import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import * as jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export default class TextFormat extends React.Component {
  constructor(props) {
    super(props);
    this.downloadTxtFile = this.downloadTxtFile.bind(this);
    this.downloadPdfFile = this.downloadPdfFile.bind(this);
    this.downloadDocFile = this.downloadDocFile.bind(this);
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

  downloadDocFile() {
    const doc = new Document();
    const content = this.props.lyrics;
    doc.addSection({
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun(content),
          ],
        }),
      ],
    });
    Packer.toBlob(doc).then((blob) => {
      // saveAs from FileSaver will download the file
      saveAs(blob, "example.docx");
    });
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
        <Button className="mb-2" variant="dark" onClick={this.downloadDocFile}>
          Download docx
        </Button>
      </>
    );
  }
}

TextFormat.propTypes = {
  lyrics: PropTypes.string,
};

/* Reference: StackOverflow post */
import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export default class TextFormat extends React.Component {
  constructor(props) {
    super(props);
    this.downloadTxtFile = this.downloadTxtFile.bind(this);
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

  render() {
    return (
      <Button className="mb-2" variant="dark" onClick={this.downloadTxtFile}>
        Download txt
      </Button>
    );
  }
}

TextFormat.propTypes = {
  lyrics: PropTypes.string,
};

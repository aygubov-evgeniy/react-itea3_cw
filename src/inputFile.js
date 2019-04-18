import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class InputFile extends Component {
	changeFile = () => {
    const inputFile = ReactDOM.findDOMNode(this._inputEl);
    const image = ReactDOM.findDOMNode(this._imageEl);
    const inputFileValue = inputFile.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
    	image.src = reader.result;
    }

    inputFileValue ? reader.readAsDataURL(inputFileValue) : image.src = '';
  }

	render() {
		const { changeFile } = this;

		return (
			<div>
				<input ref={(node) => { this._inputEl = node; }} id="imageUpload" type="file" onChange={changeFile} />
				<label htmlFor="imageUpload">Upload</label>
				<img ref={(node) => { this._imageEl = node }} src=""/>
			</div>
		);
	}
}

export default InputFile;
import React, { useEffect, useState } from 'react';
import { uploadFile } from '../services/index';

const ImportFile = (props) => {

	const[selectedFile, setSelectedFile] = useState(null);
	const[selectedFilename, setSelectedFilename] = useState(null);

	const onFileChange = (event) => {
		if (event.target.files.length === 0) {
			return;
		}

		const file = event.target.files[0];
		setSelectedFilename(file.name);
		setSelectedFile(file);

		// convert to text -- implement on back-end
	    // const reader = new FileReader();
	    // reader.onload = (event) => {
     	//   setSelectedFile(event.target.result);
     	// };
	    
	    // reader.readAsText(file);
	}

	const onFileUpload = () => {
		if (selectedFile === null) {
			return;
		}

		console.log('Uploading!', selectedFile, selectedFilename);
		uploadFile(selectedFile, selectedFilename);
	}

	return (
		<div>
			<h2>Upload a file!!</h2>
			
			<div>
				{/* Change to application/json */}
                <input type="file" onChange={onFileChange} accept="picture" />
                <button onClick={onFileUpload}>
                  Upload!
                </button>
            </div>
		</div>
	);
}

export default ImportFile;
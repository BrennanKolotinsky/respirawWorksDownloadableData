import React, { useEffect, useState } from 'react';
import { getFileNames, downloadFile } from '../services/index';
import './index.css'
import { saveAs } from 'file-saver';

import 'font-awesome/css/font-awesome.min.css';

const DataFileTable = (props) => {

  const[loadedFileNames, setLoadedFileNames] = useState(false);
  const[files, setFiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const files = await getFileNames();
      setLoadedFileNames(true);
      setFiles(files?.data?.fileNames);
    }
    fetchData();
  }, []);

  const filesTable = files.map((file, index) => {
     return <div className="" key={index}>
       { index === 0 ?
         (
           <div className="row border mt-4">
             <p className="col-2 mt-3"><strong>Index:</strong></p>
             <p className="col-6 my-auto"><i className="fa fa-file"></i><strong> Filename:</strong></p>
             <p className="col-4 my-auto"><i className="fa fa-download"></i><strong> Download:</strong></p>
           </div>
         )
         : null 
       }

       <div className="row border" key={index}>
         <p className="col-2 mt-3">{ index + 1 }</p>
         <p className="col-6 mt-3">{ file }</p>
         <button className="btn btn-primary col-4 my-auto download-button mx-auto"
            onClick={() => createFile(file)}>DOWNLOAD</button>
       </div>

       { index + 1 === files.length ?
         (
           <div className="row border">
             <p className="col-2 mt-3">{ index + 2}</p>
             <p className="col-6 my-auto"><strong>All Files</strong></p>
             <button className="btn btn-success col-4 my-auto download-button mx-auto"
               onClick={() => createAllFiles()}>DOWNLOAD ALL</button>
           </div>
         )
         : null 
       }
     </div>
  });

  const createFile = async (fileName) => {
    const resp = await downloadFile(fileName);

    const downloadName = fileName.split('.')[0] + '.json';

    // Create a blob of the data
    var fileToSave = new Blob([JSON.stringify(resp.data.file)], {
        type: 'application/json',
        name: downloadName
    });

    // Save the file
    saveAs(fileToSave, downloadName);
  };

  const createAllFiles = () => {
    files.forEach((file) => createFile(file));
  };
  
  return (
    <div>
      <div className="container max-width-600 mb-4">
        <h2 className="mt-4">Downloadable Test Data:</h2>
        {loadedFileNames ? filesTable : <center><i className="fa fa-spinner fa-spin fa-5x mt-5"></i></center>}
      </div>

      
      
    </div>
  );

}

export default DataFileTable;
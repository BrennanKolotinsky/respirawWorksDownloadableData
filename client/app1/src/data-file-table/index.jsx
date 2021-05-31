import React, { useEffect, useState } from 'react';
import { getFileNames } from '../services/index';
import './index.css'

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
           <div className="row border" key={index}>
             <p className="col-2 mt-3"><strong>Index:</strong></p>
             <p className="col-6 my-auto"><strong>Filename:</strong></p>
             <p className="col-4 my-auto"><strong>Download:</strong></p>
           </div>
         )
         : null 
       }

       <div className="row border" key={index}>
         <p className="col-2 mt-3">{ index + 1 }</p>
         <p className="col-6 mt-3">{ file }</p>
         <input type="button" className="btn btn-primary col-4 my-auto download-button mx-auto" value="DOWNLOAD"></input>
       </div>
     </div>
  });
  
  return (
    <div>

      <div className="container max-width-600">
        <h2 className="mt-3">Downloadable Test Data:</h2>
        {filesTable}
      </div>

      
      
    </div>
  );

}

export default DataFileTable;
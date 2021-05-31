import React, { useEffect, useState } from 'react';
import { getFileNames } from '../services/index.js';

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
             <p className="col-1 col-lg-1 mt-3">Index:</p>
             <p className="col-4 col-lg-2 my-auto">Filename:</p>
             <p className="col-2 col-lg-2 my-auto">Download:</p>
           </div>
         )
         : null 
       }

       <div className="row border" key={index}>
         <p className="col-1 col-lg-1 mt-3">{ index + 1 }</p>
         <p className="col-4 col-lg-2 mt-3">{ file }</p>
         <input type="button"className="btn btn-primary col-2 col-lg-2 my-auto" value="DOWNLOAD"></input>
       </div>
     </div>
  });
  
  return (
    <div>
      <h2>Downloadable Test Data:</h2>

      <div className="container">
        {filesTable}
      </div>

      
      
    </div>
  );

}

export default DataFileTable;
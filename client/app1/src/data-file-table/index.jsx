import React, { useEffect, useState } from 'react';
import { getFileNames } from '../services/index.js';
import Button from 'react-bootstrap/Button';

const DataFileTable = (props) => {

  const[loadedFileNames, setLoadedFileNames] = useState(false);
  const[files, setFiles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const files = await getFileNames();
      setLoadedFileNames(true);
      setFiles(files?.data?.fileNames);
    }
    fetchData();
  }, []);

  
  return (
    <div>
      <h2>Here</h2>
      <input type="button"className="btn btn-primary" value="DOWNLOAD"></input>
      
    </div>
    



  );

}

export default DataFileTable;
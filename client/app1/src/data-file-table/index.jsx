import React, { useEffect, useState } from 'react';
import { getFileNames } from '../services/index.js';


const DataFileTable = (props) => {

  const[loadedFileNames, setLoadedFileNames] = useState(false);
  const[files, setFiles] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const files = await getFileNames();
      setLoadedFileNames(true);
      setFiles(files?.data?.fileNames);
    }
    fetchData();
  }, []);

  
  return (
    <div>Here</div>



  );

}

export default DataFileTable;